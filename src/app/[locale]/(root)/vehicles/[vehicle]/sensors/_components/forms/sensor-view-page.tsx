import PageContainer from '@/components/layout/page-container';
import CustomerViewForm from './sensor-view-form';
import { Suspense } from 'react';
import FormCardSkeleton from '@/components/skeletons/form-card-skeleton';
import SensorViewForm from './sensor-view-form';

export default async function SensorViewPage({ params }: { params: { sensor: string } }) {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4 p-8">
        <Suspense fallback={<FormCardSkeleton />}>
          <SensorViewForm sensorId={params?.sensor} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
