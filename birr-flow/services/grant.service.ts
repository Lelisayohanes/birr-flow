import prisma from "@/lib/prisma";
import { Prisma, GrantStatus } from "@prisma/client";

export class GrantService {
  static async createGrant(data: Prisma.GrantCreateInput) {
    return prisma.grant.create({
      data,
      include: { milestones: true },
    });
  }

  static async getGrantById(id: string) {
    return prisma.grant.findUnique({
      where: { id },
      include: {
        startup: true,
        donor: true,
        investor: true,
        milestones: {
          include: { proofs: true, tranches: true }
        },
        tranches: true,
      },
    });
  }

  static async getGrantsByStartup(startupId: string) {
    return prisma.grant.findMany({
      where: { startupId },
      include: { donor: true, investor: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async updateGrant(id: string, data: Prisma.GrantUpdateInput) {
    return prisma.grant.update({
      where: { id },
      data,
    });
  }

  static async addMilestone(grantId: string, data: Omit<Prisma.MilestoneCreateInput, 'grant'>) {
    return prisma.milestone.create({
      data: {
        ...data,
        grant: { connect: { id: grantId } },
      },
    });
  }
}
