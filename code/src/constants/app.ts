import { NavItem } from '@/types/app';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'dashboard',
    isActive: false,
    items: [],
  },
  // {
  //   title: 'Live Tracking',
  //   href: '/tracking',
  //   icon: 'LocateIcon',
  //   label: 'tracking',
  //   isActive: false,
  //   items: [],
  // },
  {
    title: 'Customers',
    href: '/customers',
    icon: 'users',
    label: 'customers',
    isActive: false,
    items: [],
  },
  {
    title: 'Vehicles',
    href: '/vehicles',
    icon: 'vehicles',
    label: 'vehicles',
    isActive: false,
    items: [],
  },
  {
    title: 'User Management',
    href: '/users',
    icon: 'user',
    label: 'users',
    isActive: false,
    items: [
      {
        title: 'users',
        href: '/users',
        icon: 'user',
      },
      {
        title: 'Group Users',
        href: '/users/groups',
        icon: 'user',
      },
    ],
  },
];
