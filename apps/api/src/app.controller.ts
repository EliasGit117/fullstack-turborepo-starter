import { Controller, Get } from '@nestjs/common';
import { helloWorldMsg } from '@core2/commons/consts/messages';
import { UserRole } from '@core2/users/user';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return `${helloWorldMsg} ${UserRole.user.toUpperCase()}`;
  }
}
