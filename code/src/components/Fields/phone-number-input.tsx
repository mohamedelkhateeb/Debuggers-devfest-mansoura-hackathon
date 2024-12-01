import React from 'react';
import Saudi from '../svgs/saudi-flag';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const PhoneNumberInput = ({ data }: { data: any }) => {
  return (
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
          defaultValue={data?.PhoneNumber || ''}
          className={cn('border-0 text-sm shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 xl:py-7')}
          name="PhoneNumber"
          type="text"
          placeholder="50xxxxxx"
          maxLength={12}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
