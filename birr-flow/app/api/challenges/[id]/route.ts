import { NextRequest, NextResponse } from "next/server";
import { ChallengeService } from "@/services/challenge.service";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const challenge = await ChallengeService.getChallengeById(id);
    
    if (!challenge) {
      return NextResponse.json({ success: false, error: "Challenge not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: challenge });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch challenge" }, { status: 500 });
  }
}
