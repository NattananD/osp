import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteNoteCommand } from './delete-note.command';
import { NoteRepositoryInterface } from '../../domain/repositories/note.repository.interface';
import { Inject, NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteNoteCommand)
export class DeleteNoteHandler
  implements ICommandHandler<DeleteNoteCommand>
{
  constructor(
    @Inject('NoteRepository')
    private readonly noteRepository: NoteRepositoryInterface,
  ) {}

  async execute(command: DeleteNoteCommand): Promise<void> {
    const { id } = command;

    // ตรวจสอบว่าผู้สมัครที่ต้องการลบมีอยู่ในระบบหรือไม่
    const note = await this.noteRepository.findById(id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }

    // ลบผู้สมัคร
    await this.noteRepository.delete(id);
  }
}
