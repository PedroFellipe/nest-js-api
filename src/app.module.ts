import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'nest',
      database: 'nest',
      synchronize: true,
      entities: [ Task ]
    }),
    TaskModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
