import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import { editTaskDto } from '../../dtos/editTask.dto';
import { Task } from '../../models/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) { }

  public async getMany(): Promise<Task[]> {
    return await this.taskRepository.find()
  }

  async createOne(dto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.save(dto)
  }

  async getOne(id: string) {
    return await this.taskRepository.findOne(id)
  }

  public async editOne(id: number, dto: editTaskDto) {
    return { ok: "edit one" }
  }

  deleteOne(id: number) {
    return { ok: "delete one" }
  }
}
