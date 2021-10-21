import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import { editTaskDto } from '../../dtos/editTask.dto';
import { Task } from '../../models/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>
  ) { }

  public async getMany(): Promise<Task[]> {
    return await this.taskRepository.find()
  }

  public async createOne(dto: CreateTaskDto): Promise<Task> {
    console.log(dto);
    return await this.taskRepository.save(dto)
  }

  public async getOne(id: string) {
    console.log('asa')
    return await this.taskRepository.findOne(id)
  }

  public async editOne(id: string, dto: editTaskDto) {
    return await this.taskRepository.update(id, dto);
  }

  public async deleteOne(id: string) {
    console.log(id);
    return await this.taskRepository.delete({id: id});
  }
}
