import { z } from "zod";

export const UserRoleSchema = z.enum(["donor", "startup", "investor", "regulator", "grant_officer"]);
export const DonorTypeSchema = z.enum(["grant", "impact_fund", "corporate"]);

export const userRegisterSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).optional(),
  roles: z.array(UserRoleSchema),
  organization: z.string().optional(),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6), // Assuming auth has password, though schema didn't show it. Add anyway or ignore if OAuth only. Let's assume basic email or keep simple.
});

export const userUpdateSchema = z.object({
  fullName: z.string().min(2).optional(),
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
