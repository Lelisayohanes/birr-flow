import { NextRequest, NextResponse } from "next/server";
import { ProposalService } from "@/services/proposal.service";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const proposal = await ProposalService.getProposalById(id);
    
    if (!proposal) {
      return NextResponse.json({ success: false, error: "Proposal not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: proposal });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch proposal" }, { status: 500 });
  }
}
