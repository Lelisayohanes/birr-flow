import prisma from "@/lib/prisma";
import { User, Prisma, Role, DonorType } from "@prisma/client";

export class UserService {
  static async createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data });
  }

  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        startupProfile: true,
        donorProfile: true,
        investorProfile: true,
      },
    });
  }

  static async getUsersByRole(role: Role) {
    return prisma.user.findMany({ where: { role } });
  }

  static async createStartupProfile(userId: string, data: Omit<Prisma.StartupProfileCreateInput, 'user'>) {
    return prisma.startupProfile.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  static async createDonorProfile(userId: string, data: Omit<Prisma.DonorProfileCreateInput, 'user'>) {
    return prisma.donorProfile.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }
}
