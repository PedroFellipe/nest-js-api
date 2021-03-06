import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertUserDto } from './dtos/insert-user-dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async find(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ username: username });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async store(user: InsertUserDto): Promise<User> {
    return await this.userRepository.save({
      username: user.username,
      password: user.password,
    });
  }

  async update(id: number, userBody: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    user.username = userBody.username;
    user.password = userBody.password;

    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
