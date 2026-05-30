import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .email({ message: "Invalid type" })
    .min(1, { message: "Email is required" }),
});

export type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;