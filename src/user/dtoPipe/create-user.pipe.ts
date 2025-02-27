import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateUserPipe {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;
}
