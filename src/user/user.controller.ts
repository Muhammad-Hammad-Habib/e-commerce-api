import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserPipe } from './dtoPipe/create-user.pipe';
import { UpdateUserDto } from './dtoPipe/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import * as request from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post("/register")
  createUser(@Body(new ValidationPipe()) data: CreateUserPipe) {
    return this.userService.createUser(data);
  }

  @Get("login")
  @UseGuards(AuthGuard('local'))
  loginUser(@Request() req) {
    console.log(req.user)
    return req.user
  }  


  // //-------------
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
