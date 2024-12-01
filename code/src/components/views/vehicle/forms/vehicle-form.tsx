'use client';
import * as React from 'react';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { useCustomerActions } from '@/lib/actions/customerActions';
import { useFormState } from 'react-dom';
import { useParams } from 'next/navigation';
import VehicleFormInputs from './vehicle-inputs';
import { useVehicleActions } from '@/lib/actions/vehicleActions';
import UpdateVehicleFormInputs from './update-vehicle-inputs';
import { Separator } from '@/components/ui/separator';

export default function VehicleForm({ initialData }: any) {
  const { data, setData, errors, handleChange, handleSubmit } = useVehicleActions(initialData);
  const [state, formAction] = useFormState(handleSubmit, undefined);
  return (
    <form action={formAction} className="space-y-6">
      <VehicleFormInputs errors={errors} handleChange={handleChange} data={data} />
      <h1 className="text-left text-2xl font-bold">Vehicle Informations</h1>
      <Separator className="mt-0" />
      <UpdateVehicleFormInputs errors={errors} handleChange={handleChange} data={data} />
      <LoadingButton content="Submit" loader="Submitting..." />
    </form>
  );
}
