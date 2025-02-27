import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtoPipe/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>,
    private readonly configEnv: ConfigService) {
  }

  async createUser(data: CreateUserDto): Promise<User | any> {
    try {
      let user: User = this.userRepo.create(data);
      const saltOrRounds = +this.configEnv.get("SALT");
      const hash = await bcrypt.hash(user.password, saltOrRounds);
      user.password = hash
      let result = this.userRepo.save(user)
      return result
    } catch (error) {
      console.log(error.code)
      return error.code
    }
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
