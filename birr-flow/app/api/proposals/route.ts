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
    const challengeId = searchParams.get("challengeId") || undefined;
    const startupId = searchParams.get("startupId") || undefined;

    const proposals = await ProposalService.getAllProposals({ challengeId, startupId });
    return NextResponse.json({ success: true, data: proposals });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch proposals" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  console.log("--> HIT POST /api/proposals");
  try {
    const requestHeaders = new Headers();
    requestHeaders.set("cookie", req.headers.get("cookie") || "");

    let session = null;
    try {
      session = await auth.api.getSession({
        headers: requestHeaders
      });
    } catch (err: any) {
      console.error("getSession error:", err);
      return NextResponse.json({ success: false, error: err.message }, { status: 401 });
    }

    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    console.log("POST /api/proposals - User details:", { userId, userFound: !!user, roles: user?.roles });

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    // Auto-assign startup role if they don't have it, since they are submitting a proposal
    if (!user.roles.includes("startup")) {
      await prisma.user.update({
        where: { id: userId },
        data: { roles: { push: "startup" } }
      });
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
