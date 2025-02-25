import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { config } from 'process';
import { ConfigService } from '@nestjs/config';
// import {bcrypt} from ''

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>, private readonly configEnv: ConfigService) {
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    let user: User = this.userRepo.create(createUserDto);
    const saltOrRounds = +this.configEnv.get("SALT");
    const hash = await bcrypt.hash(user.password, saltOrRounds);
    user.password = hash
    return this.userRepo.save(user)
  }

  //---------------------
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
