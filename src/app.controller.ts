import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IHome } from './core/interfaces/home.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IHome {
    return this.appService.getInfos();
  }
}
