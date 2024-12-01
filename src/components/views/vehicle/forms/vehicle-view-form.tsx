import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import VehicleForm from './vehicle-form';
import { getVehicle } from '@/services/api/vehicleService';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

export default async function VehicleViewForm({ vehicleId }: { vehicleId: string }) {
  let vehicle = null;
  console.log({ vehicleId });

  if (vehicleId != 'new') {
    vehicle = await getVehicle(vehicleId);
    console.log({ vehicle });
    if (!vehicle) {
      notFound();
    }
  }
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">Device Informations</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <VehicleForm initialData={vehicle} />
      </CardContent>
    </Card>
  );
}
