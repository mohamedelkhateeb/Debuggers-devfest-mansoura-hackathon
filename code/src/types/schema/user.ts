import { z } from 'zod';

export const userSchema = z.object({
  FirstName: z.string({ required_error: 'First Name is required' }).min(3, 'First Name must be at least 3 characters'),
  LastName: z.string({ required_error: 'Last Name is required' }).min(3, 'Last Name must be at least 3 characters'),
  Email: z.string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid Email'),
  RoleId: z.string({ required_error: 'Role Id is required' }).nullish(),
  PhoneNumber: z
    .string({ required_error: 'Phone Number is required' })
    .length(8, 'Phone Number must be 10 characters')
    .transform((val) => {
      return `+966${val}`;
    }),
  Password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(32, { message: 'Password must be no longer than 32 characters' })
    .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must include at least one number' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include at least one special character' }),
  CustomerId: z.string({ required_error: 'Customer Id is required' }).min(1, 'Customer Id is required'),
  Claims: z.array(z.string()).nullish(),
});
