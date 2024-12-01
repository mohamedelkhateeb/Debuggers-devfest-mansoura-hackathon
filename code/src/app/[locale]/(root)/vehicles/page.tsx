import VehicleListingPage from '@/components/views/vehicle/table/vehicle-list-page';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

export const metadata = {
  title: 'Tracking - Vehicles',
  description: 'Vehicles Page For Tracking Solution',
};

const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <VehicleListingPage />;
};

export default Page;
