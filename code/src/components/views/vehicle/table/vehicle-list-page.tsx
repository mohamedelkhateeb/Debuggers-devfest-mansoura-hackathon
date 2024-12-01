import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/common/Heading';
import { Link } from '@/i18n/routing';
import { searchParamsCache } from '@/utils/searchparams';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Customer } from '@/types/models/customer.model';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import VehicleTable from '.';
import { getVehicles } from '@/services/api/vehicleService';

export default async function VehicleListingPage() {
  const PageNumber = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const PageSize = searchParamsCache.get('limit');
  const session = await getServerSession(options);
  const queryParams = new URLSearchParams({
    pageNumber: PageNumber.toString(),
    pageSize: PageSize.toString(),
    customerId: session?.user?.CustomerId.toString() || '',
  }).toString();

  const vehicles = await getVehicles(queryParams, search);

  console.log({ vehicles });

  const data: Customer[] = vehicles?.Data || [];

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Vehicles (${data.length})`} description="Find and Manage Your Vehicles here with advanced capabilities. " />
          <div className="flex space-x-2">
            <Link prefetch={true} href={'/vehicles/new'} className={cn(buttonVariants({ variant: 'default' }), 'flex gap-2')}>
              <Plus className="h-4 w-4" />
              New
            </Link>
          </div>
        </div>
        <Separator />
        <VehicleTable data={data} totalData={data.length} />
      </div>
    </PageContainer>
  );
}
