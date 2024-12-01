import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const ActionMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger className={cn(buttonVariants({ variant: 'default' }), 'text-base px-4 py-5 font-medium')}>
        Add New... <MdKeyboardArrowDown className="ml-2 h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="center" className="w-full p-2">
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default ActionMenu;
