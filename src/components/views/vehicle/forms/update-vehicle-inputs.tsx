import React from 'react';
import InputField from '@/components/Fields/input-field';
import { Textarea } from '@/components/ui/textarea';

const UpdateVehicleFormInputs = ({ errors, handleChange, data }: { CustomerId?: string; errors: any; handleChange: any; data: any }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <InputField defaultValue={data?.Plate} onChange={handleChange} errors={errors} name="Plate" label="Vehicle Plate" maxLength={8} minLength={8} placeholder="Enter Vehicle Plate" />
      <InputField defaultValue={data?.VehicleType} onChange={handleChange} errors={errors} name="VehicleType" label="Vehicle Type" placeholder="Enter Vehicle Type" />
      <InputField defaultValue={data?.Brand} onChange={handleChange} errors={errors} name="Brand" label="Vehicle Brand" placeholder="Enter Vehicle Brand" />
      <InputField defaultValue={data?.Year} onChange={handleChange} errors={errors} name="Year" label="Manufacture Year" placeholder="Enter Manufacture Year" />
      <InputField defaultValue={data?.ChassisNumber} onChange={handleChange} errors={errors} name="ChassisNumber" label="Vehicle Chassis Number" placeholder="Enter Chassis Number" />
      <InputField defaultValue={data?.Color} onChange={handleChange} errors={errors} name="Color" type="color" label="Vehicle Color" placeholder="Enter Color" />
      <InputField defaultValue={data?.FuelType} onChange={handleChange} errors={errors} name="FuelType" label=" Fuel Type" placeholder="Enter Fuel Type" />
      <InputField defaultValue={data?.TankCapacity} type="number" onChange={handleChange} errors={errors} name="TankCapacity" label="Tank Capacity" placeholder="Enter Tank Capacity" />
      <div className="col-span-3">
        <Textarea defaultValue={data?.Notes} onChange={handleChange} name="Notes" placeholder="Enter Your Notes" />
      </div>
    </div>
  );
};

export default UpdateVehicleFormInputs;
