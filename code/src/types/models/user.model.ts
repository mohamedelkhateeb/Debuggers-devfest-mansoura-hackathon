import { z } from 'zod';
import { userSchema } from '../schema/user';

export type User = {
  Id: string;
  Email: string;
  UserName: string;
  PhoneNumber: string;
  FirstName: string;
  LastName: string;
  CreationBy: string;
  CreationByName: string;
  CreationDate: string;
  IsActive: boolean;
  IsDeleted: boolean;
  CustomerId: string;
  RoleId: string;
  Role?: string;
  UserType: string;
  Claims: string[];
  VehicleGroups: any[];
};

export type TUserForm = z.infer<typeof userSchema>;
