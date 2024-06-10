import { Controller, Get, Body, Param, Query, Req,Post } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('addition')
  add(@Body() body: any): string {
    console.log(body);
    return this.appService.add(body.first,body.second);
  }
}
