import { z } from "zod";

export const ProposalStatusSchema = z.enum(["submitted", "shortlisted", "winner", "rejected"]);

export const createProposalSchema = z.object({
  challengeId: z.string(),
  ideaDescription: z.string().optional(),
  budgetBreakdown: z.any().optional(), // Replace with strict schema if needed
  milestonePlan: z.any().optional(), // Replace with strict schema if needed
  pitchDeckUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
});

export const updateProposalSchema = z.object({
  status: ProposalStatusSchema.optional(),
  donorScore: z.number().int().min(0).max(100).optional(),
  donorFeedback: z.string().optional(),
  ideaDescription: z.string().optional(),
  budgetBreakdown: z.any().optional(),
  milestonePlan: z.any().optional(),
  pitchDeckUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
});
