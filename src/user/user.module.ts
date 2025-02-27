import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserMiddleware } from './middleware/userRM.middleware';
// import { jwtModule } from 'src/config module/jwtConfig';
import { AuthAuthrizModule } from 'src/auth_authriz/auth_authriz.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthAuthrizModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes("user/register")
  }
} 
