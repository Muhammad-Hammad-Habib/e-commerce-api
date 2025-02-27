import { Module } from '@nestjs/common';
import { AuthLocalStrategy } from './auth.localStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { jwtModule } from 'src/config module/jwtConfig';

@Module({
  imports: [TypeOrmModule.forFeature([User]),jwtModule],
  controllers: [],
  providers: [AuthLocalStrategy, AuthService],
  exports: [AuthLocalStrategy, AuthService]
})
export class AuthAuthrizModule { }
