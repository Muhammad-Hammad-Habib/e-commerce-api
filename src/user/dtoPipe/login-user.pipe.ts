import { IsEmail, IsNotEmpty } from "class-validator";

export class loginUserPipe {

    @IsNotEmpty()
    @IsEmail()
    username: string

    @IsNotEmpty()
    password: string;
}
