import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Server-side environment variables
   */
  server: {
    // Supabase
    SUPABASE_URL: z.string().url({
      message: 'Invalid Supabase URL. Must be a valid URL.',
    }),
    SUPABASE_ANON_KEY: z.string().min(1, {
      message: 'Supabase anon key is required',
    }),

    // Sentry
    SENTRY_DSN: z.string().url({
      message: 'Invalid Sentry DSN. Must be a valid URL.',
    }),
    SENTRY_ORG: z.string().min(1, {
      message: 'Sentry organization is required',
    }),
    SENTRY_PROJECT: z.string().min(1, {
      message: 'Sentry project is required',
    }),
  },

  /**
   * Client-side environment variables (exposed to the browser)
   */
  client: {},

  /**
   * Runtime environment variables (available in both client and server)
   */
  runtimeEnv: {
    // Supabase
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,

    // Sentry
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,

    // Public vars
  },

  /**
   * Skip validation of environment variables during build
   */
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined
   */
  emptyStringAsUndefined: true,
});
