import { Module } from '@nestjs/common';
import ENotes from '../../core/entities/notes.entity';
import { NotesController } from './notes.controller';
import { NotesService } from '../../core/services/notes/notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ENotes])],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesModule {}
