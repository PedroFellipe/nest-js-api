import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'lucas',
      password: 'admin',
      database: 'test',
      synchronize: true,
      entities: [ Task ]
    }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
