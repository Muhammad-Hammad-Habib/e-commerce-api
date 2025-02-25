import { TypeOrmModule } from "@nestjs/typeorm";

export const typeOrmModule = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test1234',
    database: 'e-com',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities : true
})  