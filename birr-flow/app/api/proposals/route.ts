import { NextRequest, NextResponse } from "next/server";
import { ProposalService } from "@/services/proposal.service";
import { createProposalSchema } from "@/lib/validations/proposal";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const challengeId = searchParams.get("challengeId");
    
    if (!challengeId) {
       return NextResponse.json({ success: false, error: "challengeId is required" }, { status: 400 });
    }

    const proposals = await ProposalService.getProposalsByChallenge(challengeId);
    return NextResponse.json({ success: true, data: proposals });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch proposals" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.roles.includes("startup")) {
      return NextResponse.json({ success: false, error: "Only startups can submit proposals" }, { status: 403 });
    }

    const body = await req.json();
    const validatedData = createProposalSchema.parse(body);

    const startupId = userId; // Force startupId to be the logged in user

    const proposal = await ProposalService.submitProposal({
      ideaDescription: validatedData.ideaDescription,
      budgetBreakdown: validatedData.budgetBreakdown,
      milestonePlan: validatedData.milestonePlan,
      pitchDeckUrl: validatedData.pitchDeckUrl,
      videoUrl: validatedData.videoUrl,
      challenge: { connect: { id: validatedData.challengeId } },
      startup: { connect: { id: startupId } },
    });

    return NextResponse.json({ success: true, data: proposal }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Failed to submit proposal" }, { status: 500 });
  }
}
