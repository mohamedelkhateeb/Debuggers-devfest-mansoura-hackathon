'use client';
import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import USFlag from '../svgs/us-flag';
import Saudi from '../svgs/saudi-flag';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useDirection } from '@/utils/helpers';

export function SelectLang({ style = 'bg-white dark:bg-[#020817]' }: { style?: string }) {
  const locale = useLocale();
  const router = useRouter();
  return (
    <Select
      value={locale}
      onValueChange={(value) => {
        router.push(`/${value}`);
      }}
    >
      <SelectTrigger dir={useDirection()} className={(cn('flex items-center justify-center'), style)}>
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ar">
            <div className="flex gap-3">
              <span>
                <Saudi />
              </span>
              <span>العربية</span>
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex gap-3">
              <span>
                <USFlag />
              </span>
              <span>English</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
