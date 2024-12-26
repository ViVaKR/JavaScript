'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import AddBootstrap from './addBootstrap';
import Menus from './menus/page';
import { metadata } from './shared/metadata';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>KIM BUM JUN</title>
        <meta
          name="description"
          content={metadata.description || ''}
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AddBootstrap />
          <>
            <Menus />
          </>
          <>{children}</>
        </QueryClientProvider>
      </body>
    </html>
  );
}
