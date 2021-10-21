import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { editTaskDto } from '../dtos/editTask.dto';
import { Task } from '../models/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRepository : Repository<Task> 
    ){}

    public async getMany(): Promise<Task[]> {
        return await this.taskRepository.find()
    }

    async createOne(dto : CreateTaskDto){
        return await this.taskRepository.save(dto)
    }

    async getOne(id : string){ 
        return await this.taskRepository.findOne(id)
    }

    public async editOne(id: number, dto : editTaskDto){
        return await this.taskRepository.update(id,dto)
    }

    public async deleteOne(id: number){
        //return{ ok : "delete one" }
        return await this.taskRepository.delete(id)
    }
}
