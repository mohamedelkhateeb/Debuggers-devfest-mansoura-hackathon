'use client';
import * as React from 'react';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import CustomerFormInputs from './customer-inputs';
import { PermissionsView } from '../../user/forms/permissions-view';
import UserFormInputs from '../../user/forms/user-form-inputs';
import { useCustomerActions } from '@/lib/actions/customerActions';
import { useFormState } from 'react-dom';
import { useParams } from 'next/navigation';

export default function CustomerForm({ initialData }: any) {
  const { data, setData, errors, handleChange, handleSubmit } = useCustomerActions(initialData, useParams()?.customer);
  const [state, formAction] = useFormState(handleSubmit, undefined);
  return (
    <form action={formAction} className="space-y-8">
      <CustomerFormInputs errors={errors} handleChange={handleChange} data={data} />
      {!initialData && (
        <>
          <h1 className="text-xl font-bold">Admin Informations</h1>
          <UserFormInputs errors={errors} handleChange={handleChange} data={data} unRenderedFields={['PhoneNumber']} />
        </>
      )}
      <PermissionsView data={data} setData={setData} />
      <LoadingButton content="Submit" loader="Submitting..." />
    </form>
  );
}
