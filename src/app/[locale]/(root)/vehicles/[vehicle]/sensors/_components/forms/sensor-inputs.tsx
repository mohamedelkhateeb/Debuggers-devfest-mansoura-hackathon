import React from 'react';
import InputField from '@/components/Fields/input-field';
import SelectField from '@/components/Fields/select-field';
import { InputCheckbox } from '@/components/Fields/CheckBox';

const SensorFormInputs = ({ errors, handleChange, data, sensorParams, eventCodes }: { CustomerId?: string; errors: any; handleChange: any; data: any; sensorParams: any[]; eventCodes: any[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <InputField defaultValue={data?.Name || ''} required name="Name" label="Sensor Name" placeholder="Sensor 1" type="text" />
      <SelectField
        defaultValue={data?.SensorId || ''}
        required
        name="SensorId"
        label="Sensor Id"
        placeholder="Select Type"
        options={sensorParams.map((param) => ({ value: param.Id, label: param.Name }))}
      />
      <SelectField defaultValue={data?.Param || ''} required name="Param" label="Param" placeholder="Select Param" options={eventCodes.map((code) => ({ value: code.Id, label: code.Name }))} />
      <InputField defaultValue={data?.FalseName || ''} name="FalseName" label="False Name" placeholder="0" type="text" />
      <InputField defaultValue={data?.TrueName || ''} name="TrueName" label="True Name" placeholder="1" type="text" />
      <InputField defaultValue={data?.Successor || ''} name="Successor" label="Successor" placeholder="Successor" type="text" />

      {/* <SelectField name="ResultType" label="Result Type" placeholder="Select Type" options={[]} required /> */}
      {/* <InputCheckbox name="Showintooltip" label="Show in tooltip" />
      <InputCheckbox name="ShowlastChangetime" label="Show last change time" />
      <InputCheckbox name="FixedSensor" label="Fixed Sensor" /> */}
    </div>
  );
};

export default SensorFormInputs;
