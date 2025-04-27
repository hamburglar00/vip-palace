import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ServiceWorker from '@/components/ServiceWorker';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'VIP Palace - Go Big, Win Bigger!',
  description: 'Join VIP Palace for exclusive gaming benefits and bonuses.',
  manifest: './manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VIP Palace',
    startupImage: [
      {
        url: './icons/apple-splash-1125-2436.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: './icons/apple-splash-1242-2208.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: './icons/apple-splash-1242-2688.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
  icons: {
    icon: [
      { url: './icons/favicon-196.png', sizes: '196x196', type: 'image/png' },
    ],
    apple: [
      { url: './icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="manifest" href="./manifest.json" />
        <link rel="apple-touch-icon" href="./icons/apple-icon-180.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./icons/apple-icon-180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./icons/icon-144x144.png" />
        <link rel="icon" type="image/png" href="./icons/favicon-196.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="VIP Palace" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-touch-fullscreen" content="yes" />
      </head>
      <body className="h-screen w-full bg-[#1a0a2e] overflow-hidden">
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
        <ServiceWorker />
      </body>
    </html>
  );
}
