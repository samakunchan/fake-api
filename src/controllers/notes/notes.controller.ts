import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { NotesService } from '../../core/services/notes/notes.service';
import INote from '../../core/interfaces/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getListNotes(): Promise<INote[]> {
    return this.notesService.getNotes();
  }

  @Post()
  async createNote(@Body() note: INote): Promise<INote> {
    return this.notesService.create(note);
  }

  @Patch()
  async updateNote(@Body() note: INote): Promise<INote> {
    return this.notesService.update(note);
  }

  @Delete()
  async deleteNote(@Body() note: INote): Promise<INote> {
    return this.notesService.delete(note);
  }
}
