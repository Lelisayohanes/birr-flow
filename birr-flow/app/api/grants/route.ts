import { NextRequest, NextResponse } from "next/server";
import { GrantService } from "@/services/grant.service";
import { createGrantSchema } from "@/lib/validations/grant";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const startupId = searchParams.get("startupId");
    
    if (!startupId) {
       return NextResponse.json({ success: false, error: "startupId is required" }, { status: 400 });
    }

    const grants = await GrantService.getGrantsByStartup(startupId);
    return NextResponse.json({ success: true, data: grants });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch grants" }, { status: 500 });
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

    const body = await req.json();
    const validatedData = createGrantSchema.parse(body);

    const userId = session.user.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    let donorId = validatedData.donorId;
    let investorId = validatedData.investorId;

    // Based on user role, enforce the ID
    if (user.roles.includes("donor")) {
      donorId = userId;
      investorId = undefined; // Donors cannot create investor grants
    } else if (user.roles.includes("investor")) {
      investorId = userId;
      donorId = undefined;
    } else {
      return NextResponse.json({ success: false, error: "Only donors or investors can create grants" }, { status: 403 });
    }

    const grant = await GrantService.createGrant({
      totalAmount: validatedData.totalAmount,
      equityPercent: validatedData.equityPercent,
      revenueShareTerms: validatedData.revenueShareTerms,
      startup: { connect: { id: validatedData.startupId } },
      ...(validatedData.proposalId && { proposal: { connect: { id: validatedData.proposalId } } }),
      ...(donorId && { donor: { connect: { id: donorId } } }),
      ...(investorId && { investor: { connect: { id: investorId } } }),
      ...(validatedData.milestones && {
        milestones: {
          create: validatedData.milestones
        }
      })
    });

    return NextResponse.json({ success: true, data: grant }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Failed to create grant" }, { status: 500 });
  }
}
