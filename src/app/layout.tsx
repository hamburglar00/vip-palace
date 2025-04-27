import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VIP Palace - Go Big, Win Bigger!',
  description: 'Join VIP Palace for exclusive gaming benefits and bonuses.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="h-full w-full bg-[#1a0a2e]">{children}</body>
    </html>
  );
}
