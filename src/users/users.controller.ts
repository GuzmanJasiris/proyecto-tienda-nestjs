import { Controller, Post, Body, Param, ParseIntPipe, Get, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: User) {}

  @Post()
  async create(@Body() usertDto: CreateUserDto) {
    return await this.usersServices.create(usertDto);
  }

  @Get()
  findAll() {
    return this.usersServices.findAll();

  }

  @Get(':id')
  finOne(@Param('id', ParseIntPipe) id: number){
    return this.usersServices.finOne(id);

  }

  @Delete(':id')
  remove(@Param(':id', ParseIntPipe) id: number) {
    return this.usersServices.remove(id);
  }

  //el metodo patch actualiza parcialmente
  //los pipes son transformadores, transforman la data
  @Patch(':id')
  update(
    @Param(':id', ParseIntPipe) id: number,
    @Body() CreateUsertDto: CreateUserDto,
  ) {
    return this.usersServices.update(id, CreateUserDto);
  }
}
