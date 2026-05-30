import { z } from "zod";

export const ProposalStatusSchema = z.enum(["submitted", "shortlisted", "winner", "rejected"]);

export const createProposalSchema = z.object({
  challengeId: z.string(),
  startupId: z.string(),
  ideaDescription: z.string().optional(),
  budgetBreakdown: z.any().optional(), 
  milestonePlan: z.any().optional(),
  pitchDeckUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
});

export const updateProposalSchema = createProposalSchema.partial().omit({ challengeId: true, startupId: true }).extend({
  status: ProposalStatusSchema.optional(),
  donorScore: z.number().int().min(0).max(100).optional(),
  donorFeedback: z.string().optional(),
});

export const reviewProposalSchema = z.object({
  status: ProposalStatusSchema,
  donorScore: z.number().int().min(0).max(100).optional(),
  donorFeedback: z.string().optional(),
});

export const feedbackToStartupSchema = z.object({
  fromUserId: z.string(),
  feedbackText: z.string().min(1),
  isAnonymized: z.boolean().default(true),
});
