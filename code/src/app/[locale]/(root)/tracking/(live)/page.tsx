import TrackingListingPage from '@/components/views/live-tracking/table/live-track-list-page';
import { searchParamsCache } from '@/utils/searchparams';
import React from 'react';

export const metadata = {
  title: 'Tracking - Live',
  description: 'Home Page For Tracking Solution',
};

const Page = ({ searchParams }: { searchParams: Record<string, string> }) => {
  searchParamsCache.parse(searchParams);
  return <TrackingListingPage />;
};

export default Page;
