import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  role: z.string().optional(),
  meetings: z.string().optional(),
  suggestions: z.string().optional(),
  source: z.string().optional(),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;
