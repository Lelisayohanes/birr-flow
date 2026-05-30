import { z } from "zod";

export const ChallengeStatusSchema = z.enum(["draft", "open", "closed", "completed"]);
export const ParamTypeSchema = z.enum(["number", "text", "date", "file", "boolean"]);

export const challengeParameterSchema = z.object({
  paramName: z.string().min(1),
  paramType: ParamTypeSchema,
  required: z.boolean().default(false),
});

export const createChallengeSchema = z.object({
  donorId: z.string(),
  title: z.string().min(3),
  sector: z.string().optional(),
  problemStatement: z.string().optional(),
  submissionDeadline: z.string().datetime().optional(),
  reviewPeriodStart: z.string().datetime().optional(),
  announcementDate: z.string().datetime().optional(),
  isPublic: z.boolean().default(true),
  status: ChallengeStatusSchema.default("draft"),
  parameters: z.array(challengeParameterSchema).optional(),
});

export const updateChallengeSchema = createChallengeSchema.partial().omit({ donorId: true });
