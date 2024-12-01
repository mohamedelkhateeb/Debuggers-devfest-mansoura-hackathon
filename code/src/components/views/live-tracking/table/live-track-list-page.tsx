import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/common/Heading';
import LiveTrackingTable from '.';
import { searchParamsCache } from '@/utils/searchparams';

const breadcrumbItems = [
  { title: 'Home', link: '/' },
  { title: 'tracking', link: '/tracking' },
];

export default async function TrackingListingPage() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender }),
  };

  console.log(filters);

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Online Devices(${0})`} description="Find and Track Your Vehicles here with advanced Tracking Tools. " />
        </div>
        <Separator />
        <LiveTrackingTable data={[]} totalData={0} />
      </div>
    </PageContainer>
  );
}
