import { options } from '@/app/api/auth/[...nextauth]/options';
import AppSidebar from '@/components/layout/app-sidebar';
import { redirect } from '@/i18n/routing';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Tracking - Home',
  description: 'Home Page For Tracking Solution',
};

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/');
  }
  return <AppSidebar>{children}</AppSidebar>;
}
