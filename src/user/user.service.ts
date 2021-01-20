import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InsertUserDto } from "./dtos/insert-user-dto";
import { UpdateUserDto } from "./dtos/update-user-dto";
import { User } from "./user.entity";

@Injectable()
export class UserService
{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]>
    {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User>
    {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new NotFoundException;
        }

        return user;
    }

    async store(user: InsertUserDto): Promise<User> 
    {
        return await this.userRepository.save({
            name: user.name,
            email: user.email
        });
    }

    async update(id: number, userBody: UpdateUserDto): Promise<User>
    {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new NotFoundException;
        }
         
        user.name = userBody.name;
        user.email = userBody.email;

        await this.userRepository.save({
            name: user.name,
            email: user.email
        });

        return user;
    }

    async delete(id: number): Promise<void> 
    {
        await this.userRepository.delete(id);
    }
    
}