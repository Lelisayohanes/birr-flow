import { z } from "zod";

export const ProofStatusSchema = z.enum(["pending", "approved", "rejected", "suspicious"]);
export const OfficerActionSchema = z.enum(["mark_suspicious", "escalate", "clear"]);

export const submitProofSchema = z.object({
  milestoneId: z.string(),
  fileData: z.string().optional(),
  fileHash: z.string().optional(),
  comment: z.string().optional(),
});

export const reviewProofSchema = z.object({
  status: ProofStatusSchema,
  comment: z.string().optional(),
});

export const officerActionSchema = z.object({
  action: OfficerActionSchema,
  notes: z.string().optional(),
});
