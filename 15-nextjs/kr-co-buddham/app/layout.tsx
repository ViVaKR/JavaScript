import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import Footer from './footer/page';
import ResponsiveAppBar from './navbar/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Providers } from './providers';
export const metadata: Metadata = {
  title: 'Sutra',
  description: 'Sutra',
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Sutra</title>
        <meta
          name="description"
          content="Sutra"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body className="font-poppins">
        <ResponsiveAppBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
