import { NextRequest, NextResponse } from "next/server";
import { ChallengeService } from "@/services/challenge.service";
import { createChallengeSchema } from "@/lib/validations/challenge";
import { z } from "zod";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get("status") as import("@prisma/client").ChallengeStatus | undefined;
    
    const challenges = await ChallengeService.getChallenges(status);
    return NextResponse.json({ success: true, data: challenges });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch challenges" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = createChallengeSchema.parse(body);

    // Assuming donorId is passed or extracted from auth token (mocking with body for now)
    const donorId = body.donorId; 
    if (!donorId) {
       return NextResponse.json({ success: false, error: "donorId is required" }, { status: 400 });
    }

    const challenge = await ChallengeService.createChallenge({
      ...validatedData,
      donor: { connect: { id: donorId } },
      parameters: {
        create: validatedData.parameters
      }
    });

    return NextResponse.json({ success: true, data: challenge }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Failed to create challenge" }, { status: 500 });
  }
}
