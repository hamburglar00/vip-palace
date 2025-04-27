<div align="center">
  <img src="public/assets/Logo_w_title.png" alt="VIP Palace Logo" width="300" />
</div>

A landing page app built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

This is a landing page application. To run it locally:

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd vip-palace
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router pages and layouts
│   ├── components/    # React components
│   │   ├── common/    # Shared components
│   │   ├── layout/    # Layout components
│   │   ├── features/  # Feature-specific components
│   │   └── ui/        # UI components
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # Global styles and CSS modules
│   ├── utils/         # Utility functions
│   ├── services/      # API and external service integrations
│   ├── context/       # React context providers
│   ├── types/         # TypeScript type definitions
│   └── constants/     # Shared constants
├── public/            # Static assets
│   └── assets/        # Images and icons
└── __tests__/        # Test files
```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Linting
- [PostCSS](https://postcss.org/) - CSS processing

## Testing

```bash
npm test
npm test:watch
npm test:coverage
```

## Deployment

The application is configured for deployment on Vercel. Push to main branch to trigger automatic deployment.

## License

All rights are reserved to VIP Palace.
