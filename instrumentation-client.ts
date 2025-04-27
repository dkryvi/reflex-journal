import * as Sentry from '@sentry/nextjs';

import { env } from '@/src/env';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: env.SENTRY_DSN,
    tracesSampleRate: 1,
    debug: false,
  });
} else {
  console.log('Sentry is disabled in non-production environments.');
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
