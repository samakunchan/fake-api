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
    console.log('Create');
    const newNote = await this.notesRepository.create({
      ...note,
      createdAt: new Date(),
    });
    await this.notesRepository.save(newNote);
    return newNote;
  }

  async update(note: INote): Promise<INote> {
    console.log('Update');
    // Retourne un truc comme ça: UpdateResult { generatedMaps: [], raw: [], affected: 1 }
    // il faut .find() pour retrouver l'objet modifier
    await this.notesRepository.update(note.id, {
      ...note,
      updatedAt: new Date(),
    });

    console.log(note);
    return this.notesRepository.findOneBy({ id: note.id });
  }

  async delete(note: INote): Promise<INote> {
    console.log('Delete');
    const deleteResponse = await this.notesRepository.delete(note.id);
    if (!deleteResponse.affected) {
      console.log('Pas bon');
      throw new HttpException(
        `Note '${note.id}' not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return note;
    }
  }
}
