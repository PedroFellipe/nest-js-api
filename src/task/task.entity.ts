import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
    created,
    inProgress,
    done
}

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ length: 50 })
    title: String;

    @Column({ nullable: true, length: 255 })
    description: String;

    @Column({ default: TaskStatus.created })
    status: TaskStatus
}