import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: User;
  }

  interface User extends DefaultUser {
    UserName: string;
    Id: string;
    Email: string;
    CustomerId: string;
    Role: string;
    Permission: string[];
    exp: number;
    iss: string;
    aud: string;
    token: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    sub: string;
    Success: boolean;
    StatusCode: number;
    Data: {
      IsAuthenticated: boolean;
      Email: string;
      Message: string;
      Token: string;
      TokenExpiration: string;
      RefreshToken: string;
      RefreshTokenExpiration: string;
    };
    id: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
