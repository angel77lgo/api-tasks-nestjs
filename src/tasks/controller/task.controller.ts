import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  public async createTaskAction() {
    
  }
}
