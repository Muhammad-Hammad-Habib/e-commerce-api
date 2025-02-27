import { Injectable, NestMiddleware } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserMiddleware implements NestMiddleware {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {

    }

    async use(req: Request, res: Response, next: NextFunction) {
        const data = await this.userRepo.findBy({
            email: req.body.email
        })
        if (data[0] != undefined) {
            res.json({
                record: 0,
                message: "This email Alredy exist"
            })
        } else {
            // console.log(data[0])
            next()
        }
    }
}