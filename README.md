# Reflex Journal

A modern journaling application built with Next.js, TypeScript, and Supabase.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Database:** [Supabase](https://supabase.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** Supabase Auth
- **Deployment:** [Vercel](https://vercel.com)
- **Monitoring:** [Sentry](https://sentry.io)

## Features

- Modern stack (React, TypeScript, Tailwind CSS)
- Path aliases (`@/*`)
- Strict ESLint & TypeScript configuration
- Code formatting with Prettier
- Husky for Git hooks
- Comprehensive environment variable validation
- Integration with Sentry for error tracking

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dkryvi/reflex-journal.git
cd reflex-journal
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy `.env.example` to `.env` and update the variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm dev
```

### Development Tools

- **Formatting**: `pnpm format`
- **Linting**: `pnpm lint`
- **Type Checking**: `pnpm type-check`
- **Check All**: `pnpm check`

### Git Hooks

- Pre-commit: Runs `lint-staged` to ensure code quality
- Commit Message: Follows [Conventional Commits](https://www.conventionalcommits.org/)

## Project Structure

```
.
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   ├── lib/        # Utility functions
│   └── env.ts      # Environment variables
├── public/         # Static files
└── package.json    # Dependencies and scripts
```

## Environment Variables

Required environment variables:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# Sentry
SENTRY_DSN=your-sentry-dsn
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=your-sentry-project
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format with Prettier
- `pnpm type-check` - Run TypeScript compiler
- `pnpm check` - Run all checks

## License

MIT License - see LICENSE for details
