import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import FormCardSkeleton from '@/components/skeletons/form-card-skeleton';
import VehicleViewForm from './vehicle-view-form';

export default async function VehicleViewPage({ params }: { params: { vehicle: string } }) {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4 p-8">
        <Suspense fallback={<FormCardSkeleton />}>
          <VehicleViewForm vehicleId={params?.vehicle} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
