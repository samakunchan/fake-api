import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { NotesController } from './controllers/notes/notes.controller';
import { NotesService } from './core/services/notes/notes.service';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
