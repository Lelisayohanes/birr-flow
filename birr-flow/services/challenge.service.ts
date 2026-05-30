import prisma from "@/lib/prisma";
import { Prisma, ChallengeStatus } from "@prisma/client";

export class ChallengeService {
  static async createChallenge(data: Prisma.ChallengeCreateInput) {
    return prisma.challenge.create({
      data,
      include: { parameters: true },
    });
  }

  static async getChallenges(status?: ChallengeStatus) {
    const where = status ? { status } : {};
    return prisma.challenge.findMany({
      where,
      include: { donor: true, parameters: true },
      orderBy: { submissionDeadline: 'asc' }
    });
  }

  static async getChallengeById(id: string) {
    return prisma.challenge.findUnique({
      where: { id },
      include: {
        donor: true,
        parameters: true,
        proposals: {
          include: { startup: true }
        }
      },
    });
  }

  static async updateChallenge(id: string, data: Prisma.ChallengeUpdateInput) {
    return prisma.challenge.update({
      where: { id },
      data,
      include: { parameters: true },
    });
  }

  static async updateChallengeStatus(id: string, status: ChallengeStatus) {
    return prisma.challenge.update({
      where: { id },
      data: { status },
    });
  }
}
