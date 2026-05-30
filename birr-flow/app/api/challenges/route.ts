import { NextRequest, NextResponse } from "next/server";
import { ChallengeService } from "@/services/challenge.service";
import { createChallengeSchema } from "@/lib/validations/challenge";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

    const requestHeaders = new Headers();
    requestHeaders.set("cookie", req.headers.get("cookie") || "");

    const session = await auth.api.getSession({
      headers: requestHeaders
    });

    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    // Use session user ID as donorId, ignore body.donorId
    const donorId = session.user.id;

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
