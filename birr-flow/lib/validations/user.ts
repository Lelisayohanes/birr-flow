import { z } from "zod";

export const UserRoleSchema = z.enum(["donor", "startup", "investor", "regulator", "grant_officer"]);
export const DonorTypeSchema = z.enum(["grant", "impact_fund", "corporate"]);

export const userRegisterSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).optional(),
  role: UserRoleSchema,
  organization: z.string().optional(),
});

export const startupProfileSchema = z.object({
  startupName: z.string().min(2),
  registrationNumber: z.string().optional(),
  sector: z.string().optional(),
});

export const donorProfileSchema = z.object({
  donorType: DonorTypeSchema,
  preferredSectors: z.array(z.string()).optional(),
});

export const investorProfileSchema = z.object({
  investmentFocus: z.string().optional(),
  typicalTrancheSize: z.number().optional(),
});
