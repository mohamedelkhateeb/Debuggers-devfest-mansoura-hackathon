import { options } from '@/app/api/auth/[...nextauth]/options';
import UserListingPage from '@/components/views/user/table/user-list-page';
import { searchParamsCache } from '@/utils/searchparams';
import { getServerSession } from 'next-auth';
import React from 'react';

export const metadata = {
  title: 'Tracking - User',
  description: 'User Page For Tracking Solution',
};

const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);

  return <UserListingPage />;
};

export default Page;
