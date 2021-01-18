import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertTaskDto } from "./dtos/insert-task-dto";
import { UpdateTaskDto } from "./dtos/update-task-dto";
import { Repository } from 'typeorm';
import { Task } from "./task.entity";

@Injectable()
export class TaskService 
{
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.find();
    }
    
    async findOne(id: number): Promise<Task> {
        const task = await this.taskRepository.findOne(id);

        if (!task) {
            throw new NotFoundException;
        }

        return task 
    }

    async store(task: InsertTaskDto): Promise<Task> {
        
        return await this.taskRepository.save({
            title: task.title, 
            description: task.description
        });
    }

    async update(id: number, taskBody: UpdateTaskDto): Promise<Task> {
        const task = await this.taskRepository.findOne(id);
        
        if (!task) {
            throw new NotFoundException;
        }

        task.title = taskBody.title;
        task.description = taskBody.description;
        task.status = taskBody.status;

        return this.taskRepository.save(task);
    }

    async delete(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}