import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controller/task.controller';
import { Task } from './models/task.entity';
import { TaskService } from './services/task/task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TasksModule {}
