import prisma from "@/lib/prisma";
import { Prisma, ProposalStatus } from "@prisma/client";

export class ProposalService {
  static async submitProposal(data: Prisma.ProposalCreateInput) {
    return prisma.proposal.create({
      data,
    });
  }

  static async getProposalById(id: string) {
    return prisma.proposal.findUnique({
      where: { id },
      include: {
        startup: true,
        challenge: true,
        feedbacks: true,
      },
    });
  }

  static async getProposalsByChallenge(challengeId: string) {
    return prisma.proposal.findMany({
      where: { challengeId },
      include: { startup: true },
      orderBy: { submittedAt: 'desc' }
    });
  }

  static async updateProposal(id: string, data: Prisma.ProposalUpdateInput) {
    return prisma.proposal.update({
      where: { id },
      data,
    });
  }

  static async reviewProposal(id: string, status: ProposalStatus, score?: number, feedback?: string) {
    return prisma.proposal.update({
      where: { id },
      data: {
        status,
        ...(score !== undefined && { donorScore: score }),
        ...(feedback !== undefined && { donorFeedback: feedback }),
      },
    });
  }
}
