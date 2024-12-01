import { z } from 'zod';

export const customerSchema = z.object({
  customerName: z.string().nullable(),
  emailAddress: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  customerType: z.string().nullable(),
  city: z.string().nullable(),
  zipCode: z.string().nullable(),
  country: z.string().nullable(),
  address: z.string().nullable(),
  location: z.string().nullable(),
  website: z.string().nullable(),
  identityNumber: z.string().nullable(),
  commercialRecordNumber: z.string().nullable(),
  commercialRecordIssueDate: z.date().nullable(),
  dateOfBirth: z.date().nullable(),
  comments: z.string().nullable(),
  uplevelId: z.string().nullable(),
});

const customerCreateDistributerModel_AdminSchema = z.object({
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string().nullable(),
  password: z.string().nullable(),
});

const customerCreateDistributerModelSchema = z.object({
  image: z.instanceof(File).nullable(),
  customer: customerSchema,
  admin: customerCreateDistributerModel_AdminSchema,
  claims: z.array(z.string()),
});
