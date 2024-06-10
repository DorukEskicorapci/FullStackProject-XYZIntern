import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  add(first: string, second: string): string {
    return (Number(first)+Number(second)).toString();
  }
}
