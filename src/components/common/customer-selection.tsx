'use client';
import React from 'react';
import SelectField from '../Fields/select-field';
import { useSession } from 'next-auth/react';
import { useClientFetch, useClientPost } from '@/hooks/use-client-fetch';

interface Props {
  name?: string;
  CustomerId?: string;
  errors?: any;
  endpoint: string;
  data?: any;
  placeholder: string;
  label: string;
  onChange?: any;
}

const CustomerSelection = ({ errors, endpoint = 'customers/companies_individuals', placeholder, label, onChange, name = 'UplevelId' }: Props) => {
  const { data: session } = useSession();
  const { Data = [], isLoading }: { Data: any[]; isLoading: boolean } = useClientPost(endpoint, {
    PageNumber: 1,
    PageSize: 100,
  });
  return (
    <SelectField
      onChange={onChange}
      defaultValue={session?.user?.CustomerId}
      name={name}
      label={label}
      options={[
        { value: session?.user?.CustomerId, label: session?.user?.UserName || '' },
        ...(Data || []).map((d: any) => ({
          value: d?.Id || '',
          label: d?.CustomerName || '',
        })),
      ]}
      errors={errors}
      required
      placeholder={placeholder}
    />
  );
};

export default CustomerSelection;
