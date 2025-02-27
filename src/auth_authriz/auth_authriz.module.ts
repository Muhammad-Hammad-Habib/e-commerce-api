import { Module } from '@nestjs/common';
import { AuthLocalStrategy } from './auth.localStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [AuthLocalStrategy],
  exports: [AuthLocalStrategy]
})
export class AuthAuthrizModule { }
