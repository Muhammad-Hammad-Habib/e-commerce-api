import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { envConfigMudule } from './config module/evnCongif';
import { typeOrmModule } from './config module/databaseConfig';

@Module({
  imports: [envConfigMudule, typeOrmModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
