export interface IUser {
  UserName: string;
  Id: string;
  Email: string;
  CustomerId: string;
  Role: string;
  Permission: string[];
  exp: number;
  iss: string;
  aud: string;
}
