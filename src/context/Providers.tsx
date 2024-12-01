'use client';
import React from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { ThemeProvider } from './providers/theme-provider';
export default function Providers({ children, session }: { children: React.ReactNode; session: SessionProviderProps['session'] }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
