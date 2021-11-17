import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SentryModule} from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';
import 'source-map-support/register';

@Module({
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

