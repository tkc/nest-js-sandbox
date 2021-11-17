import * as Sentry from "@sentry/node";
import { LogLevel } from '@sentry/types';

export const sentryInit = () => {
  Sentry.init({
      debug: true,
      dsn:
        'https://2e19e3ffd19b45afa64488ef3f16215b@o564563.ingest.sentry.io/6066873',
      logLevel: LogLevel.Debug,
      environment: 'development',
      tracesSampleRate: 1.0,
  });
};
