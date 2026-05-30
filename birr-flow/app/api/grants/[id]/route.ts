import { NextRequest, NextResponse } from "next/server";
import { GrantService } from "@/services/grant.service";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const grant = await GrantService.getGrantById(id);
    
    if (!grant) {
      return NextResponse.json({ success: false, error: "Grant not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: grant });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch grant" }, { status: 500 });
  }
}

