'use client';
import GenericDialog from '@/components/Dialogs/delete-dialog';
import { Menubar, MenubarContent, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar';
import { RiExchange2Line } from 'react-icons/ri';
import { useRouter } from '@/i18n/routing';
import { User } from '@/types/models/user.model';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { changeStatusCustomer, deleteCustomer } from '@/services/api/customerService';
import { Customer } from '@/types/models/customer.model';
interface CellActionProps {
  data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }: { data: Customer }) => {
  const router = useRouter();
  const itemStyle = 'relative flex gap-5 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent justify-between';
  return (
    <>
      <Menubar className="justify-center flex border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <MoreHorizontal className="h-4 w-4" />
          </MenubarTrigger>
          <MenubarContent align="end">
            <h1 className="text-md mx-3 my-1 font-bold"> Actions</h1>
            <MenubarSeparator />
            <div className={itemStyle} onClick={() => router.push(`/customers/${data.Id}`)}>
              Update Customer
              <Edit size={15} />
            </div>
            <div className={itemStyle}>
              <GenericDialog
                icon={<FaRegTrashCan size={40} className="flex justify-center rounded-md bg-red-200 px-2 py-2 text-sm text-red-500 hover:bg-red-200 hover:text-red-600" />}
                trigger="Delete Customer"
                submitText="Delete"
                btnLoader="Deleting..."
                asyncAction={deleteCustomer}
                data={data}
                title="Confirm Delete"
                description={`Are you sure you want to delete (${data?.CustomerName})  ? This action cannot be undone.`}
                item="Customer"
                submitStyle="bg-red-600 hover:bg-red-700"
              />
              <Trash size={20} />
            </div>
            <div className={itemStyle}>
              <GenericDialog
                icon={<RiExchange2Line size={40} className="flex justify-center rounded-md bg-green-200 px-2 py-2 text-sm text-green-500 hover:bg-green-200 hover:text-green-600" />}
                trigger="Change Status"
                submitText="Change"
                btnLoader="Changing..."
                asyncAction={changeStatusCustomer}
                data={data}
                title="Change Status?"
                description={`Are you sure you want to Change Status (${data?.CustomerName})  ? This action cannot be undone.`}
                item="Customer"
                submitStyle=""
              />
              <RiExchange2Line size={20} />
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};