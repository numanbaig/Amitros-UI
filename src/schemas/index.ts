import z from "zod";

export const AuthFormSchema = (type: string) => {
  const commonSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
  });

  const registerSchema = commonSchema
    .merge(
      z.object({
        registrationCode: z
          .string()
          .min(6, "Registration code must be at least 6 characters long"),
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        confirmPassword: z
          .string()
          .min(8, "Password must be at least 8 characters long"),
      })
    )
    .superRefine((data, ctx) => {
      if (data.confirmPassword !== data.password) {
        ctx.addIssue({
          path: ["confirmPassword"],
          code: z.ZodIssueCode.custom,
          message: "Passwords must match",
        });
      }
    });

  const loginSchema = commonSchema;

  const returningUserSchema = commonSchema.merge(
    z.object({
      registrationCode: z
        .string()
        .min(6, "Registration code must be at least 6 characters long"),
    })
  );

  const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
  });

  // Combine schemas based on type
  if (type === "register") return registerSchema;
  if (type === "forgot-password") return forgotPasswordSchema;
  if (type === "returning-user-registration") return returningUserSchema;
  return loginSchema;
};
