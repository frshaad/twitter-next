import * as z from 'zod';

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const registerSchema = z.object({
  name: z
    .string({ required_error: 'Name is required!' })
    .min(3, 'Name must be more than 3 characters')
    .max(20, 'Name must be less than 20 characters'),
  username: z
    .string({ required_error: 'Username is required!' })
    .min(3, 'Username must be more than 3 characters')
    .max(15, 'Username must be more less 15 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type SignInInputs = z.infer<typeof signInSchema>;
export type RegisterInputs = z.infer<typeof registerSchema>;
