// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ae87e1d642a822f7fb8c1be6cf1bd3f2@o4507248160735232.ingest.de.sentry.io/4507248162898000",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  enabled: process.env.NODE_ENV === 'production',

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
