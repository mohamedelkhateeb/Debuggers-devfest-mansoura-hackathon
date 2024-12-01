import React from 'react';
import InputField from '@/components/Fields/input-field';
import SelectField from '@/components/Fields/select-field';
import { cn } from '@/lib/utils';
import Saudi from '@/components/svgs/saudi-flag';
import { Input } from '@/components/ui/input';
import { Role } from '@/types/models/role.model';
import { useSession } from 'next-auth/react';

const UserFormInputs = ({
  roles,
  userId,
  errors,
  handleChange,
  data,
  unRenderedFields,
}: {
  roles?: Role[];
  userId?: string;
  errors: any;
  handleChange: any;
  data: any;
  unRenderedFields?: string[];
}) => {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <input type="hidden" name="CustomerId" value={session?.user?.CustomerId} />
      <InputField defaultValue={data?.FirstName} onChange={handleChange} errors={errors} name="FirstName" label="First Name" placeholder="Enter your first name" type="text" required />
      <InputField defaultValue={data?.LastName} onChange={handleChange} errors={errors} name="LastName" label="Last Name" placeholder="Enter your last name" type="text" required />
      <InputField defaultValue={data?.Email} onChange={handleChange} errors={errors} name="Email" label="Email" placeholder="Enter your email" type="email" required />
      {userId == 'new' && (
        <SelectField
          errors={errors}
          name="RoleId"
          label="Role"
          onChange={handleChange}
          options={
            roles
              ?.filter((role) => role.Name !== 'ADMIN' && role.Name !== 'GROUP_ADMIN' && role.Name !== 'DISTRIBUTER')
              .map((role) => ({
                value: role.Id.split('|').join(''),
                label: role.Name,
              })) || []
          }
          placeholder="Select a Role"
          required
        />
      )}
      {!unRenderedFields?.includes('PhoneNumber') && (
        <div>
          <p className="mb-2 text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>{' '}
          </p>
          <div dir="ltr" className="flex max-h-11 items-center rounded-lg border px-4">
            <span className="flex items-center gap-2 border-r-2 pr-2 text-sm">
              <Saudi />
              +966
            </span>
            <Input
              defaultValue={data?.PhoneNumber}
              className={cn('border-0 text-sm shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 xl:py-7')}
              name="PhoneNumber"
              type="text"
              placeholder="50xxxxxx"
              maxLength={8}
            />
          </div>
        </div>
      )}
      <InputField onChange={handleChange} errors={errors} name="Password" label="Password" placeholder="**********" type="password" required />
    </div>
  );
};

export default UserFormInputs;
