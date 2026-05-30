import { NextRequest, NextResponse } from "next/server";
import { GrantService } from "@/services/grant.service";
import { createGrantSchema } from "@/lib/validations/grant";
import { z } from "zod";

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
    const body = await req.json();
    const validatedData = createGrantSchema.parse(body);

    const grant = await GrantService.createGrant({
      totalAmount: validatedData.totalAmount,
      equityPercent: validatedData.equityPercent,
      revenueShareTerms: validatedData.revenueShareTerms,
      startup: { connect: { id: validatedData.startupId } },
      ...(validatedData.proposalId && { proposal: { connect: { id: validatedData.proposalId } } }),
      ...(validatedData.donorId && { donor: { connect: { id: validatedData.donorId } } }),
      ...(validatedData.investorId && { investor: { connect: { id: validatedData.investorId } } }),
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
