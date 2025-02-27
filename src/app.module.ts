import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { envConfigMudule } from './config module/evnCongif';
import { typeOrmModule } from './config module/databaseConfig';
import { AuthAuthrizModule } from './auth_authriz/auth_authriz.module';

@Module({
  imports: [envConfigMudule, typeOrmModule, UserModule, AuthAuthrizModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
