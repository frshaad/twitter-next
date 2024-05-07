import './globals.css';

import type { Metadata } from 'next';

import SideBar from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import TrendBar from '@/components/trendbar';
import { fontSans } from '@/lib/font';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter clone app created by Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex w-full max-w-7xl justify-between gap-4 px-3">
            <SideBar />
            <main className="flex-[2]">{children}</main>
            <TrendBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
