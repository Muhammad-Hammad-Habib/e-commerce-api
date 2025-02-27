import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {
        super()
    }
    async validate(username: string, password: string): Promise<User | UnauthorizedException> {
        if (!username.trim() || !password.trim()) throw new UnauthorizedException("User and Password are Required")
        const data = await this.userRepo.findBy({
            email: username.trim(),
        })

        if (data[0] == undefined) throw new UnauthorizedException("This User Does not exist")
        const isMatch = await bcrypt.compare(password, data[0].password);

        if (!isMatch) throw new UnauthorizedException("Incorret password")
        return data[0]
    }
}  