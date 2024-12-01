import GroupUserListingPage from '@/components/views/user/Groups/table/group-user-list-page';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

export const metadata = {
  title: 'Tracking - Group User',
  description: 'Group User Page For Tracking Solution',
};

const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <GroupUserListingPage />;
};

export default Page;
