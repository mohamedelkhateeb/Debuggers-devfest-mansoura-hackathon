import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { signIn } from '@/services/api/authService';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '@/types/interfaces/auth';

async function refreshAccessToken(data: any) {
  console.log({ token: data.Token });

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/authentication/refresh-token`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${data.Token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    console.log({ res });
    const obj = await res.json();
    if (obj?.Success) {
      return obj;
    }
    return null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null; // Return the original token if an error occurs
  }
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        Email: {},
        Password: {},
      },
      async authorize(credentials) {
        console.log({ credentials });
        const res = await signIn(credentials as { Email: string; Password: string });
        console.log({ res });
        if (res?.Success) {
          console.log('Authorization success:', res); // Debugging
          return res;
        }
        console.error('Authorization failed:', res); // Debugging
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return user ? { ...token, ...user } : token;
    },
    async session({ session, token }) {
      const decodedToken = jwtDecode(token?.Data?.Token) as IUser;
      session.user = { ...session.user, ...decodedToken };
      session.user.token = token?.Data?.Token;
      return session;
    },
  },
  debug: true, // Enables detailed logging in production
  pages: {
    signIn: '/',
  },
};
