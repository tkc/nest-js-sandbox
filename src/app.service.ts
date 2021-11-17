import { Injectable } from '@nestjs/common';
import {AppError} from './error';

async function errAsync(){
  try {
    throw new Error("errAsync Error");
  } catch (exception) {
    // console.log(typeof(exception))
    // if (typeof e.message === "string") throw new AppError(e.message);
    // if (exception instanceof HttpException) return exception.getStatus();
    // if (exception instanceof EntityNotFoundError) return 404;
    throw exception
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

