import { z } from "zod";

export const GrantStatusSchema = z.enum(["active", "completed", "defaulted"]);
export const ProofTypeSchema = z.enum(["receipt", "photo", "pdf", "link"]);

export const createMilestoneSchema = z.object({
  title: z.string().min(2),
  dueDate: z.string().datetime().optional(),
  orderIndex: z.number().int().optional(),
  requiredProofType: ProofTypeSchema,
  tranchePercent: z.number().min(0).max(100).optional(),
});

export const createGrantSchema = z.object({
  proposalId: z.string().optional(),
  donorId: z.string().optional(),
  investorId: z.string().optional(),
  startupId: z.string(),
  totalAmount: z.number().positive(),
  equityPercent: z.number().min(0).max(100).optional(),
  revenueShareTerms: z.string().optional(),
  milestones: z.array(createMilestoneSchema).optional(),
});

export const updateGrantSchema = z.object({
  status: GrantStatusSchema.optional(),
  totalAmount: z.number().positive().optional(),
  equityPercent: z.number().min(0).max(100).optional(),
  revenueShareTerms: z.string().optional(),
});
