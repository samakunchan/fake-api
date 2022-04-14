import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './controllers/notes/notes.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
