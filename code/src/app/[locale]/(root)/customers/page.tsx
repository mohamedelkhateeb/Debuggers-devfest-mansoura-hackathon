import CustomerListingPage from '@/components/views/customer/table/customer-list-page';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

export const metadata = {
  title: 'Tracking - Customer',
  description: 'Customer Page For Tracking Solution',
};

const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <CustomerListingPage />;
};

export default Page;
