'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from '@/components/Fields/input-field';
import FormError from '@/components/common/form-error';
import FormSuccess from '@/components/common/form-success';
import { Link } from '@/i18n/routing';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { resetPassword } from '@/services/api/authService';
import { resetPasswordSchema } from '@/types/schema/auth';
const ResetPwdForm = ({ params }: { params: Record<string, string> }) => {
  const [errMsg, setErrMsg] = React.useState({
    Success: false,
    Message: '',
  });
  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const result = resetPasswordSchema.safeParse(data);
    console.log(result);
    if (!result.success) {
      setErrMsg({
        Success: false,
        Message: result.error.errors[0].message,
      });
      return;
    }
    const response = await resetPassword(result.data);
    if (response) {
      setErrMsg({
        Success: response?.Success,
        Message: response?.Message,
      });
      return;
    }
  };
  return (
    <Card className="w-[400px] py-4 shadow-2xl sm:w-[450px]">
      <form action={handleSubmit}>
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <CardTitle className="text-xl">Reset password</CardTitle>
          <CardDescription>Please Enter The New Password and Password Confirmation</CardDescription>
        </CardHeader>
        <CardContent>
          <input type="hidden" name="Token" value={params.token} />
          <input type="hidden" name="Email" value={params.email} />
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col gap-4">
              <InputField name="Password" label="Password" type="password" placeholder="Enter your Password" />
              <InputField name="ConfirmPassword" label="Confirm Password" type="password" placeholder="Confirm your Password" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-between gap-4">
          <FormError error={!errMsg.Success ? errMsg.Message : undefined} />
          <FormSuccess message={errMsg.Success ? errMsg.Message : undefined} />
          <LoadingButton content="Reset Password" style="ml-auto mt-2 w-full " />
          <Button size="lg" variant="link" asChild className={'m-auto mt-0 p-0'}>
            <Link prefetch={true} href="/">
              Back to sign in
            </Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ResetPwdForm;
