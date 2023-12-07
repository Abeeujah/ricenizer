import { z } from "zod";

export const paymentSchema = z.object({
  email: z
    .string()
    .min(3, "Email must contain at least 3 characters")
    .max(255)
    .email(),
  amount: z.coerce.number().min(500, "Currently not taking orders below 500"),
});
