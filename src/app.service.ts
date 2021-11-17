import { Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { error } from 'console';
import {AppError} from './error';

async function errAsync(){
  try {
    throw new Error("一般的なエラーだよ");
  } catch (e) {
    if (typeof e.message === "string") throw new AppError(e.message);
    throw new AppError("unKnow");
  }
}

@Injectable()
export class AppService {
  async getHello() {
    // throw new Error('example error');
    await errAsync()
    return 'Hello World!';
  }
}

