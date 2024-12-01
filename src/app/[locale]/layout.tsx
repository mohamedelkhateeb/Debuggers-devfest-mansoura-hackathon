import '../globals.css';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Providers from '@/context/Providers';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { Toaster as ShadcnToaster } from '@/components/ui/toaster';
import toast, { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Tracking',
  description: 'Track your activity with ease.',
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const session = await getServerSession(options);
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers session={session}>
            <NextTopLoader showSpinner={false} />
            {children}
            <ShadcnToaster />
            <Toaster position="top-right" />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
