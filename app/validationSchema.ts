import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(100),
  description: z.string().min(1, "Description is required.").max(65535),
});

export const PatchIssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(100).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required!")
    .max(255)
    .optional()
    .nullable(),
});
