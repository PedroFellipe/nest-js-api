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
// @ts-ignore
import { UserService } from './user.service';
import { User } from './user.entity';
import { InsertUserDto } from './dtos/insert-user-dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  store(@Body() user: InsertUserDto): Promise<User> {
    return this.userService.store(user);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<User> {
    return this.userService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(204)
  delete(@Param('id') id: number): void {
    this.userService.delete(id);
  }
}
