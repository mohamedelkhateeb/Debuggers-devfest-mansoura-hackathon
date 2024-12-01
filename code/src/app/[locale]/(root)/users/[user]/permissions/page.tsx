import FormCardSkeleton from '@/components/skeletons/form-card-skeleton';
import UserPermissionsViewForm from '@/components/views/user/user-permissions/user-permissions-view-form';
import { Suspense } from 'react';

export default async function Page({ params, searchParams }: { params: { user: string }; searchParams: Record<string, string> }) {
  return (
    <>
      <Suspense fallback={<FormCardSkeleton />}>
        <UserPermissionsViewForm userId={params?.user} type={searchParams?.type} />
      </Suspense>
    </>
  );
}
