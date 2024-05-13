// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://53501484f2b9dc2e0a35482dfd9f3dda@o4507248160735232.ingest.de.sentry.io/4507248162898000",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "light",
      // themeLight: {
      //   // background: "var(--background)",
      //   // backgroundHover: "",
      //   border: "var(--ring)",
      //   borderRadius: "var(--radius)",
      //   error: "",
      //   foreground: "",
      //   formBorderRadius: "var(--radius)",
      //   formContentBorderRadius: "",
      //   inputOutlineFocus: "var(--ring)",
      //   submitBackground: "",
      //   submitBackgroundHover: "var(--primary)",
      //   submitForeground: "",
      //   submitForegroundHover: "",
      //   submitOutlineFocus: "",
      //   success: ""
      //
      // },
      isNameRequired: true,
      isEmailRequired: true,
      showBranding: false,
    }),
  ],
});
