// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import AdminProvider from '@/app/admin-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dev Capsule',
  description: 'Professional web development, graphic design, video editing, motion graphics and SEO services to elevate your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AdminProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </AdminProvider>
      </body>
    </html>
  );
}