import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // Dependency Injection
  constructor(private readonly usersService: UsersService) {}

  // CREATE user
  // POST /users
  @Post()
  create(
    @Body()
    body: {
      name: string;
      email: string;
      role?: string;
    },
  ) {
    return this.usersService.create(body);
  }

  // READ all users
  // GET /users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // READ one user by ID
  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  //Read one user by id
  @Patch(':id')
 update(
    @Param('id') id:string,
    @Body()
    body:{
        name?:string;
        email?:string;
        role?:string;
    },
 ){
    return this.usersService.update(Number(id),body);
 }
 //  Delete user
 @Delete(':id')
 remove(@Param('id')id : string){
    return this.usersService.remove(Number(id));   
 }





}
