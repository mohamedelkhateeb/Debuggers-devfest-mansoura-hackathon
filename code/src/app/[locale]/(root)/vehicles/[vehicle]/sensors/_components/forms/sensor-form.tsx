'use client';
import * as React from 'react';
import LoadingButton from '@/components/ui/custom-buttons/loading-btn';
import { useFormState } from 'react-dom';
import { useParams } from 'next/navigation';
import SensorFormInputs from './sensor-inputs';
import Calibration from './Calibrations';
import { useSensorActions } from '@/lib/actions/sensor-actions';

export default function SensorForm({ initialData, eventCodes, sensorParams }: any) {
  const { data, setData, errors, handleChange, handleSubmit } = useSensorActions(initialData);
  const [state, formAction] = useFormState(handleSubmit, undefined);
  return (
    <form action={formAction} className="space-y-8">
      <SensorFormInputs errors={errors} handleChange={handleChange} data={data} sensorParams={sensorParams} eventCodes={eventCodes} />
      <Calibration valName="Calibrations" setResultData={setData} resultData={data} validationErrors={errors} />
      <LoadingButton content="Submit" loader="Submitting..." />
    </form>
  );
}
