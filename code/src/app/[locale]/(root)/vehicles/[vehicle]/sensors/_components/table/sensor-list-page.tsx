import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/common/Heading';
import { Link } from '@/i18n/routing';
import { searchParamsCache } from '@/utils/searchparams';
import CustomerTable from '.';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { getCustomers } from '@/services/api/customerService';
import { Customer } from '@/types/models/customer.model';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import SensorTable from '.';
import { getSensors } from '@/services/api/vehicleService';

export default async function SensorListingPage({ vehicleId }: { vehicleId: string }) {
  const PageNumber = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const PageSize = searchParamsCache.get('limit');
  const queryParams = new URLSearchParams({
    PageNumber: PageNumber.toString(),
    PageSize: PageSize.toString(),
  }).toString();
  const Customers = await getCustomers(
    {
      PageNumber: PageNumber.toString(),
      PageSize: PageSize.toString(),
    },
    search,
  );
  const sesnors = await getSensors(vehicleId);
  console.log(sesnors);

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Sensors (${sesnors?.length})`} description="Find and Manage Your Sensors here with advanced capabilities. " />
          <div className="flex space-x-2">
            <Link prefetch={true} href={`/vehicles/${vehicleId}/sensors/new`} className={cn(buttonVariants({ variant: 'default' }), 'flex gap-2')}>
              <Plus className="h-4 w-4" />
              New
            </Link>
          </div>
        </div>
        <Separator />
        <SensorTable data={sesnors} totalData={sesnors?.length} />
      </div>
    </PageContainer>
  );
}
