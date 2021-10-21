import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { editTaskDto } from '../dtos/editTask.dto';
import { TasksService } from '../services/tasks.service';

@Controller('api/v1/task')	
export class TaskController {

	constructor( private readonly taskService : TasksService){}
  	
  	@Get()
  	public async getTasks(){
	    const data =  await this.taskService.getMany()
		return{
			message : "Peticion correcta",
			data
		}
  	}

	@Get(':id')
  	public async getTask(@Param('id') id: string) {
	    return await this.taskService.getOne(id)
  	}

	@Post()
  	public async createTask( @Body() dto : CreateTaskDto ){
		return await this.taskService.createOne(dto)
	}

  	@Put(':id')
  	public async editTask(
		@Param('id', ParseIntPipe) id : number,
		@Body() dto : editTaskDto
		){
		return this.taskService.editOne(id, dto)
	}

	@Delete(':id')
	public async deleteTask(@Param(':id', ParseIntPipe) id: number) {
		return this.taskService.deleteOne( id )
	}

	/* @Get()
	public async newTask( @Body('name')name : String){
	  console.log(`${name}`);
	  return {
		message : `el usuario es  ${name} y la descripcion es `
	  };
	} */

}	

