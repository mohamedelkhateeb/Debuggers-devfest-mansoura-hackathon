import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import CustomerForm from './sensor-form';
import { getCustomer, getPermissionsForCustomer } from '@/services/api/customerService';
import { notFound } from 'next/navigation';
import SensorForm from './sensor-form';
import { getSensorEventCodes, getSensorParams } from '@/services/api/vehicleService';

export default async function SensorViewForm({ sensorId }: { sensorId: string }) {

  const [sensorParams, eventCodes] = await Promise.all([getSensorParams(), getSensorEventCodes()]);

  let customer = null;
  if (sensorId != 'new' && sensorId != 'distributer') {
    customer = await getCustomer(sensorId);
    const per = await getPermissionsForCustomer(sensorId);
    console.log({ per });
    if (!customer) {
      notFound();
    }
  }
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="font-bo ld text-left text-2xl">Sensor Informations</CardTitle>
      </CardHeader>
      <CardContent>
        <SensorForm initialData={customer} sensorParams={sensorParams} eventCodes={eventCodes} />
      </CardContent>
    </Card>
  );
}
