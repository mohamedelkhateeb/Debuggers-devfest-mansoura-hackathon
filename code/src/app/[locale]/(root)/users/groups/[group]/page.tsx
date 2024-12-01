import GroupUsersViewPage from '@/components/views/user/Groups/form/group-view-page';
import { searchParamsCache } from '@/utils/searchparams';

export const metadata = {
  title: 'Group Users - View',
};

export default function Page({ searchParams, params }: { searchParams: Record<string, string>; params: { customer: string } }) {
  searchParamsCache.parse(searchParams);
  return <GroupUsersViewPage params={params} />;
}
