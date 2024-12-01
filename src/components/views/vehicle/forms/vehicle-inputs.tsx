import React from 'react';
import InputField from '@/components/Fields/input-field';
import { useSession } from 'next-auth/react';
import PhoneNumberInput from '@/components/Fields/phone-number-input';
import CustomerSelection from '@/components/common/customer-selection';

const VehicleFormInputs = ({ errors, handleChange, data }: { CustomerId?: string; errors: any; handleChange: any; data: any }) => {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <InputField defaultValue={data?.IMEI} onChange={handleChange} errors={errors} name="IMEI" label="IMEI " maxLength={15} minLength={15} placeholder="Enter IMEI" required />
      <InputField defaultValue={data?.SimNumber} onChange={handleChange} errors={errors} name="SimNumber" label="Sim Number" placeholder="Enter Sim Number" required />
      <InputField defaultValue={data?.Name} onChange={handleChange} errors={errors} name="Name" label="Name" placeholder="Enter Name" required />
      <InputField defaultValue={data?.DeviceModel} onChange={handleChange} errors={errors} name="DeviceModel" label="Device Model" placeholder="Enter Device Model" required />
      <InputField defaultValue={data?.DeviceSerialNumber} onChange={handleChange} errors={errors} name="DeviceSerialNumber" label="Device Serial Number" placeholder="Enter Device Serial Number" />
      <InputField defaultValue={data?.SimSerialNumber} onChange={handleChange} errors={errors} name="SimSerialNumber" label="Sim Serial Number" placeholder="Enter Sim Serial Number" />
      <CustomerSelection
        CustomerId={session?.user?.Id || ''}
        errors={errors}
        endpoint={'customers/companies_individuals'}
        data={data}
        placeholder="Select parent customer"
        label="Parent Customer"
        onChange={handleChange}
        name="CustomerId"
      />
    </div>
  );
};

export default VehicleFormInputs;
