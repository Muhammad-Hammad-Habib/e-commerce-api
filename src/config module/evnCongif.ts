import { ConfigModule } from "@nestjs/config";
import { pathEnvFile } from "./envName";


export const envConfigMudule = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: pathEnvFile,
}) 