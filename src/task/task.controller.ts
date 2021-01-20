import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "./task.entity";
import { InsertTaskDto } from "./dtos/insert-task-dto";
import { UpdateTaskDto } from "./dtos/update-task-dto";

@Controller('/task')
export class TaskController {

    constructor(
        private readonly taskService: TaskService
    ) {}

    @Get('/')
    findAll(): Promise<Task[]> 
    {
        return this.taskService.findAll();
    }

    @Post('/')
    store(@Body() task: InsertTaskDto): Promise<Task> 
    {
        return this.taskService.store(task)
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() task: UpdateTaskDto): Promise<Task> 
    {
        return this.taskService.update(id, task)
    }

    @Get('/:id') 
    findOne(@Param('id') id: number): Promise<Task> 
    {
        return this.taskService.findOne(id);
    }
    
    @Delete('/:id')
    @HttpCode(204)
    delete(@Param('id') id: number): void 
    {
        this.taskService.delete(id);
    }
}