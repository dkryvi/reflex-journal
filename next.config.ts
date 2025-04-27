import { withSentryConfig } from '@sentry/nextjs';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
