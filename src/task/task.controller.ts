import {
  UseGuards,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { InsertTaskDto } from './dtos/insert-task-dto';
import { UpdateTaskDto } from './dtos/update-task-dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  store(@Body() task: InsertTaskDto): Promise<Task> {
    return this.taskService.store(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id') id: number, @Body() task: UpdateTaskDto): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(204)
  delete(@Param('id') id: number): void {
    this.taskService.delete(id);
  }
}
