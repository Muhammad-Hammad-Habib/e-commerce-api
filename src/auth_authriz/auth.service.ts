import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {
    }
    dataToJwt(payload) {
        console.log(payload)
        return this.jwtService.sign({ payload: payload })
    }
}
