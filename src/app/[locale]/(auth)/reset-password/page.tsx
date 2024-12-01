import * as React from 'react';

import { varifyResetPwdToken } from '@/services/api/authService';
import ResetPwdForm from '@/components/views/auth/reset-pwd-form';

export default async function Page({ searchParams }: { searchParams: { token: string; email: string } }) {
  // if (!searchParams.token) redirect('/');

  const { email, token } = searchParams;
  if (!email || !token) {
    return <div>Invalid Reset Password Link</div>;
  }
  const response = await varifyResetPwdToken({ email, token });

  console.log({ response });
  if (!response?.Success) {
    return <div>Invalid Token</div>;
  }
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <ResetPwdForm params={searchParams} />
    </section>
  );
}
