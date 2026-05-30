import { NextRequest, NextResponse } from "next/server";
import { ProofService } from "@/services/proof.service";
import { submitProofSchema } from "@/lib/validations/proof";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = submitProofSchema.parse(body);

    const uploadedById = body.uploadedById; // Normally from auth context
    if (!uploadedById) {
       return NextResponse.json({ success: false, error: "uploadedById is required" }, { status: 400 });
    }

    const proof = await ProofService.submitProof({
      fileData: validatedData.fileData,
      fileHash: validatedData.fileHash,
      comment: validatedData.comment,
      milestone: { connect: { id: validatedData.milestoneId } },
      uploadedBy: { connect: { id: uploadedById } },
    });

    return NextResponse.json({ success: true, data: proof }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Failed to submit proof" }, { status: 500 });
  }
}
