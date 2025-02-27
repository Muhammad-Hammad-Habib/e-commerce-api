import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserMiddleware } from './middleware/userRM.middleware';
import { jwtModule } from 'src/config module/jwtConfig';

@Module({
  imports: [TypeOrmModule.forFeature([User]), jwtModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes("user/register")
  }
}
 