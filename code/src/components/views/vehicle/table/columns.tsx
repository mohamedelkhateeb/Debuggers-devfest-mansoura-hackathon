'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { User } from '@/types/models/user.model';
import { MdSensors } from 'react-icons/md';
import { Link } from '@/i18n/routing';

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'IMEI',
    header: 'IMEI',
  },
  {
    accessorKey: 'Name',
    header: 'Name',
  },
  {
    accessorKey: 'SimNumber',
    header: 'Sim Number',
  },
  {
    accessorKey: 'SimSerialNumber',
    header: 'Sim Serial Number',
  },
  {
    accessorKey: 'DeviceSerialNumber',
    header: 'Device Serial Number',
  },

  {
    accessorKey: 'Sensors',
    header: 'Sensors',
    cell: ({ row }) => (
      <Link className='flex items-center justify-center' href={`/vehicles/${row.original.Id}/sensors`} >
        <MdSensors size={30} />
      </Link>
    ),
  },

  {
    id: 'actions',
    header: 'ACTIONS',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
