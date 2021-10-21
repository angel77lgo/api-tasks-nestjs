import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { editTaskDto } from '../dtos/editTask.dto';
import { TaskService } from '../services/task/task.service';


@Controller('api/v1/task')	
export class TaskController {

	constructor( private readonly taskService : TaskService){}
  	
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
  	public async createTask(@Body() dto: CreateTaskDto ){
		console.log('dto', dto);
		return await this.taskService.createOne(dto)
	}

  	@Put(':id')
  	public async editTask(
		@Param('id') id : string,
		@Body() dto : editTaskDto
		){
		return this.taskService.editOne(id, dto)
	}

	@Delete(':id')
	public async deleteTask(@Param('id') id: string) {
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

