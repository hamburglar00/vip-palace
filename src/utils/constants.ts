export const APP_NAME = 'VIP Palace';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
