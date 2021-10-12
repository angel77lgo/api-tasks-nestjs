import { CreateTaskDto } from "./createTask.dto";
import { PartialType } from  '@nestjs/mapped-types'

export class editTaskDto extends PartialType(CreateTaskDto){ }