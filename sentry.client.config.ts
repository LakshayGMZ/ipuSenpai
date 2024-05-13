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
      colorScheme: "system",
      themeLight: {
        background: "var(--card)",
        borderRadius: "var(--radius)",
        error: "var(--destructive)",
        foreground: "var(--foreground)",
        inputOutlineFocus: "var(--primary)",
        inputBorder: "var(--primary)",
        formBorderRadius: "var(--radius)",
        formContentBorderRadius: "var(--radius)",
        submitBackgroundHover: "var(--primary)",
        submitOutlineFocus: "var(--ring)",
        submitForeground: "var(--foreground)",
        submitBackground: "var(--card)",
        cancelBackgroundHover: "var(--destructive)",
      },
      themeDark: {
        background: "var(--card)",
        foreground: "var(--secondary-foreground)",
        borderRadius: "var(--radius)",
        error: "var(--destructive)",
        inputOutlineFocus: "var(--primary)",
        inputBorder: "var(--primary)",
        formBorderRadius: "var(--radius)",
        formContentBorderRadius: "var(--radius)",
        submitBackgroundHover: "var(--primary)",
        submitBorder: "var(--primary)",
        submitForeground: "var(--foreground)",
        submitBackground: "var(--card)",
        cancelBackgroundHover: "var(--destructive)",
      },
      formTitle: "Feedback/Report Issue",
      buttonLabel: "Send Feedback",
      submitButtonLabel: "Send",
      emailPlaceholder: "youcanbeanythingyouwant@69.com",
      messagePlaceholder: "Any nice words or feedback? Any bad words or feedback? We're all ears! 🐘\nNo seriously, bugs?",
      isNameRequired: true,
      isEmailRequired: false,
      showBranding: false,
    }),
  ],
});
