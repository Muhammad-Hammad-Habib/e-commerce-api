import { JwtModule } from "@nestjs/jwt";
import * as dotenv from 'dotenv';
import { pathEnvFile } from "./envName";
dotenv.config({ path: pathEnvFile });

export const jwtModule = JwtModule.register({
    secret: process.env.SECRET_KEY_JWT,
    signOptions: {
        expiresIn: "240s"
    }
})
console.log(process.env.SALT)