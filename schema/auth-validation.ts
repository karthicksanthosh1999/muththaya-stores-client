import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const resigterSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  mobile: z
    .string()
    .min(9, "Mobile must be at least 10 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type RegisterFormData = z.infer<typeof resigterSchema>;