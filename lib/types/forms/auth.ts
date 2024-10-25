import { z } from 'zod';

export const signupFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  name: z
    .string()
    .trim()
    .min(3, { message: 'Username most contain at least 3 characters' })
    .max(20, { message: 'Username can have a max of 20 characters' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Username can only contain letters' }),
  invite_code: z
    .string()
    .trim()
    .min(1, { message: 'You need a invite code to be able to join' }),
});

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type CreateUserInput = z.TypeOf<typeof signupFormSchema>;
export type LoginUserInput = z.TypeOf<typeof loginFormSchema>;
