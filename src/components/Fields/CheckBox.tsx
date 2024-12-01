"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (value: any) => void;
  errors?: { [key: string]: [string] };
  required?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export function InputCheckbox({ name, label, onChange, errors, required, defaultChecked, disabled }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} required={required} defaultChecked={defaultChecked} disabled={disabled} onCheckedChange={onChange} />
      <label htmlFor={name} className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
    </div>
  );
}
