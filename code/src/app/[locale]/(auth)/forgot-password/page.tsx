'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from '@/components/Fields/input-field';
import FormError from '@/components/common/form-error';
import FormSuccess from '@/components/common/form-success';
import { Link } from '@/i18n/routing';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { z } from 'zod';
import { forgotPassword } from '@/services/api/authService';

const emailSchema = z.string({ required_error: 'Email Address is required' }).min(1, 'Email Address is required').email('Invalid Email Address');

export default function Page() {
  const [errMsg, setErrMsg] = React.useState({
    Success: false,
    Message: '',
  });
  const handleSubmit = async (formData: FormData) => {
    const result = emailSchema.safeParse(formData.get('Email'));
    if (!result.success) {
      setErrMsg({
        Success: false,
        Message: result.error.errors[0].message,
      });
      return;
    }
    const response = await forgotPassword(result.data);
    if (response) {
      setErrMsg({
        Success: response?.Success,
        Message: response?.Message,
      });
      return;
    }
  };
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <form action={handleSubmit}>
        <Card className="w-[400px] py-4 shadow-2xl sm:w-[450px]">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <CardTitle className="text-xl">Forgot password?</CardTitle>
            <CardDescription>Please enter your email and we will send you a link to reset your password.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <InputField name="Email" label="Email" placeholder="Enter your email" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-2">
            <FormError error={!errMsg.Success ? errMsg.Message : undefined} />
            <FormSuccess message={errMsg.Success ? 'We have successfully updated your password' : undefined} />
            <LoadingButton content="Send" loader="Sending..." style="ml-auto mt-2 w-full " />
            <Button size="lg" variant="link" asChild className={'m-auto mt-0 p-0'}>
              <Link prefetch={true} href="/">
                Back to sign in
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
