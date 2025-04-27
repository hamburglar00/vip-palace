import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-slow': 'fadeIn 1s ease-in-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
        'spin-pause': 'spinAndPause 8s ease-in-out infinite',
        'scale-up-fade-in': 'scaleUpFadeIn 0.7s ease-in-out',
        'scale-down-fade-out': 'scaleDownFadeOut 0.5s ease-in-out',
        'gentle-scale': 'gentleScale 3s ease-in-out infinite',
        'bounce-dot': 'bounceDot 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinAndPause: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(360deg)' },
          '30%': { transform: 'rotate(360deg)' },
          '45%': { transform: 'rotate(720deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },
        scaleUpFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        scaleDownFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
        },
        gentleScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounceDot: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
