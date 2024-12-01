'use client';
import FormError from '@/components/common/form-error';
import InputField from '@/components/Fields/input-field';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { Link, useRouter } from '@/i18n/routing';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { signInSchema } from '@/types/schema/auth';
export default function SigninForm() {
  const [errMsg, setErrMsg] = useState('');

  const router = useRouter();
  const submitForm = async (formData: FormData) => {
    // const result = signInSchema.safeParse({
    //   Email: formData.get('Email'),
    //   Password: formData.get('Password'),
    // });
    // console.log(result);

    // if (!result.success) {
    //   setErrMsg(result.error.errors[0].message);
    //   return;
    // }
    try {
      const response: any = await signIn('credentials', {
        Email: formData.get('Email'),
        Password: formData.get('Password'),
        // callbackUrl: '/',
        redirect: false,
      });
      console.log(response);

      response.status == 401 ? setErrMsg('Invalid credentials!') : router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  console.log(errMsg);

  return (
    <>
      <form action={submitForm}>
        <div className="mb-4 flex flex-col gap-4">
          <InputField name="Email" label="Email" required type="text" placeholder="Enter your email" />
          <InputField name="Password" label="Password" required type="password" placeholder="Enter your password" />
        </div>
        <FormError error={errMsg} />
        <Button size="sm" variant="link" asChild className={'mr-auto mt-0 p-0'}>
          <Link prefetch={true} href="/forgot-password">
            Forgot password?
          </Link>
        </Button>
        <LoadingButton content="Sign in" loader={'Signing In...'} style="ml-auto mt-2 w-full" />
      </form>
    </>
  );
}
