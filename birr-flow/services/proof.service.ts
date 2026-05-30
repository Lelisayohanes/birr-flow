import prisma from "@/lib/prisma";
import { Prisma, ProofStatus, OfficerAction } from "@prisma/client";

export class ProofService {
  static async submitProof(data: Prisma.ProofCreateInput) {
    return prisma.proof.create({
      data,
    });
  }

  static async getProofById(id: string) {
    return prisma.proof.findUnique({
      where: { id },
      include: {
        milestone: true,
        uploadedBy: true,
        reviewedBy: true,
        officerActions: true,
      },
    });
  }

  static async reviewProof(id: string, reviewerId: string, status: ProofStatus, comment?: string) {
    return prisma.proof.update({
      where: { id },
      data: {
        status,
        reviewedBy: { connect: { id: reviewerId } },
        reviewedAt: new Date(),
        ...(comment && { comment }),
      },
    });
  }

  static async addOfficerAction(proofId: string, officerId: string, action: OfficerAction, notes?: string) {
    return prisma.grantOfficerAction.create({
      data: {
        action,
        notes,
        proof: { connect: { id: proofId } },
        officer: { connect: { id: officerId } },
      },
    });
  }
}
