import VehicleViewPage from '@/components/views/vehicle/forms/vehicle-view-page';
import { searchParamsCache } from '@/utils/searchparams';

export const metadata = {
  title: 'Vehicle - View',
};

export default function Page({ searchParams, params }: { searchParams: Record<string, string>; params: { vehicle: string } }) {
  searchParamsCache.parse(searchParams);
  return <VehicleViewPage params={params} />;
}
