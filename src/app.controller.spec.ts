import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
