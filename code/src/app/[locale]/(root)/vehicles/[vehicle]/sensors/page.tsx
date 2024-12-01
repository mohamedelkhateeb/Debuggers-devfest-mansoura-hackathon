import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';
import SensorListingPage from './_components/table/sensor-list-page';

export const metadata = {
  title: 'Tracking - Sensors',
  description: 'Sensors Page For Tracking Solution',
};

const Page = async ({ searchParams, params }: { searchParams: Record<string, string>; params: { vehicle: string } }) => {
  searchParamsCache.parse(searchParams);
  return <SensorListingPage vehicleId={params?.vehicle} />;
};

export default Page;
