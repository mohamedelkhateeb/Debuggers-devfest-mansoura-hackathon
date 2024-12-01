import CustomerViewPage from '@/components/views/customer/forms/customer-view-page';
import { searchParamsCache } from '@/utils/searchparams';

export const metadata = {
  title: 'Customers - View',
};

export default function Page({ searchParams, params }: { searchParams: Record<string, string>; params: { customer: string } }) {
  searchParamsCache.parse(searchParams);
  return <CustomerViewPage params={params} />;
}
