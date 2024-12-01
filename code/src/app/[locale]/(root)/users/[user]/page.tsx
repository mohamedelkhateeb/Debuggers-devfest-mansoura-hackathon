import UserViewPage from '@/components/views/user/forms/user-view-page';
import { searchParamsCache } from '@/utils/searchparams';

export const metadata = {
  title: 'User - View',
};

export default function Page({ searchParams, params }: { searchParams: Record<string, string>; params: { user: string } }) {
  searchParamsCache.parse(searchParams);
  return <UserViewPage params={params} />;
}
