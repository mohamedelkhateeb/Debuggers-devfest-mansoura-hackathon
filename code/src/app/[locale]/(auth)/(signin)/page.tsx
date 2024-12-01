import { Metadata } from 'next';
import { ToggleTheme } from '@/components/common/toggle-theme';
import React from 'react';
import { SignInView } from '@/components/views/auth/signin-view';
import { SelectLang } from '@/components/common/select-lang';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from '@/i18n/routing';
export const metadata: Metadata = {
  title: 'Tracking - Sign in',
  description: 'Login to your account to continue to tracking.',
};

export default async function SigninPage() {
  const session = await getServerSession(options);
  if (session) {
    redirect('/tracking');
  }
  return (
    <>
      <div className="fixed right-16 top-4 z-50 flex">
        <SelectLang />
      </div>
      <div className="fixed right-4 top-4 z-50 flex">
        <ToggleTheme />
      </div>
      <SignInView />
    </>
  );
}
