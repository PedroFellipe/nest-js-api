import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { InsertUserDto } from "./dtos/insert-user-dto";
import { UpdateUserDto } from "./dtos/update-user-dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController
{

    constructor(
        private readonly userService: UserService
    ) {}

    @Get('/')
    findAll(): Promise<User[]> 
    {
        return this.userService.findAll();
    }

    @Post('/')
    store(@Body() user: InsertUserDto): Promise<User> 
    {
        return this.userService.store(user);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<User> 
    {
        return this.userService.update(id, user);
    }

    @Get('/:id')
    findOne(@Param('id') id: number): Promise<User>
    {
        return this.userService.findOne(id);
    }

    @Delete('/:id')
    @HttpCode(204)
    delete(@Param('id') id: number): void
    {
        this.userService.delete(id);
    }
}