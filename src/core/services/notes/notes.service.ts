import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import ENotes from '../../entities/notes.entity';
import INote from '../../interfaces/note.interface';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(ENotes)
    private notesRepository: Repository<INote>,
  ) {}

  getNotes(): Promise<INote[]> {
    return this.notesRepository.find();
  }

  async create(note: INote): Promise<INote> {
    const newNote = await this.notesRepository.create(note);
    await this.notesRepository.save(newNote);
    return newNote;
  }

  async update(note: INote): Promise<INote> {
    await this.notesRepository.update(note.id, {
      ...note,
      updatedAt: new Date(),
    });
    return note;
  }

  async delete(note: INote): Promise<INote> {
    const deleteResponse = await this.notesRepository.delete(note.id);
    if (!deleteResponse.affected) {
      throw new HttpException(
        `Note '${note.id}' not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return note;
    }
  }
}
