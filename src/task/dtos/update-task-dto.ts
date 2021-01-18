import { TaskStatus } from "../task.entity";

export class UpdateTaskDto {
    title?: String;
    description?: String;
    status: TaskStatus
}