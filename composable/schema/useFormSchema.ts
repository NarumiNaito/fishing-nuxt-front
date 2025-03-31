import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { errorMessage } from "./errorMessage";

export const useLoginSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: errorMessage.email_empty,
      })
      .nonempty(errorMessage.email_empty)
      .email(errorMessage.email_check),

    password: z
      .string({
        required_error: errorMessage.password_empty,
      })
      .nonempty(errorMessage.password_empty)
      .min(6, { message: errorMessage.password_check }),
  })
);

export const useRegisterSchema = toTypedSchema(
  z.object({
    name: z
      .string({
        required_error: errorMessage.name_empty,
      })
      .nonempty(errorMessage.name_empty),

    email: z
      .string({
        required_error: errorMessage.email_empty,
      })
      .nonempty(errorMessage.email_empty)
      .email(errorMessage.email_check),

    formPassword: z
      .object({
        password: z
          .string({
            required_error: errorMessage.password_empty,
          })
          .nonempty(errorMessage.password_empty)
          .min(6, { message: errorMessage.password_check }),
        passwordConfirm: z
          .string({
            required_error: errorMessage.password_empty,
          })
          .nonempty(errorMessage.password_empty)
          .min(6, { message: errorMessage.password_check }),
      })
      .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
        path: ["passwordConfirm"],
        message: errorMessage.password_confirm,
      }),
  })
);
