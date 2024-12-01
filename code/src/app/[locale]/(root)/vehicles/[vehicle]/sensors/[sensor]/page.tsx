import CustomerViewPage from '@/components/views/customer/forms/customer-view-page';
import { searchParamsCache } from '@/utils/searchparams';
import SensorViewPage from '../_components/forms/sensor-view-page';

export const metadata = {
  title: 'Sensor - View',
};

export default function Page({ searchParams, params }: { searchParams: Record<string, string>; params: { sensor: string } }) {
  searchParamsCache.parse(searchParams);
  return <SensorViewPage params={params} />;
}
