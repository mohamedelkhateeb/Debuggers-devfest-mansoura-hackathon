import { object, string } from 'zod';

export const signInSchema = object({
  Email: string(),
  Password: string(),
});
// export const signInSchema = object({
//   Email: string({ required_error: 'Email Address is required' }).min(1, 'Email Address is required').email('Invalid Email Address'),
//   Password: string(),
// });

export const resetPasswordSchema = object({
  Password: string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(32, { message: 'Password must be no longer than 32 characters' })
    .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must include at least one number' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include at least one special character' }),
  ConfirmPassword: string({ required_error: 'You have to confirm your password' }).min(1, 'You have to confirm your password'),
  Token: string(),
  Email: string({ required_error: 'Email Address is required' }).min(1, 'Email Address is required').email('Invalid Email Address'),
}).refine((data) => data.Password === data.ConfirmPassword, {
  message: 'Passwords do not match',
  path: ['ConfirmPassword'],
});
