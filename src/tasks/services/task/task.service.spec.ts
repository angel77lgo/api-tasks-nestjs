import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { assert } from 'console';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import { Task } from '../../models/task.entity';
import { TaskService } from './task.service';


const mockTask = new CreateTaskDto();
mockTask.name = 'TastTest';
mockTask.description = 'Test';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, 
      {
        provide: getRepositoryToken(Task),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTask)
        }
      }],
    }).compile();

    service = await module.resolve(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create task success', async () => {
    const task = new CreateTaskDto();

    task.name = 'TastTest',
    task.description = 'Test'
    const taskSaved = await service.createOne(task)

    expect(taskSaved.name).toEqual(mockTask.name)
  })

  it('get all task success', async () => {
    expect('').toEqual('');
  })
});
