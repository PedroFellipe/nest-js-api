import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  created,
  inProgress,
  done,
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ nullable: true, length: 255 })
  description: string;

  @Column({ default: TaskStatus.created })
  status: TaskStatus;
}
