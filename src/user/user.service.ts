import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { SignupDto } from './dto/SignupDto';
import * as bcrypt from 'bcrypt';
import { UserEnum } from '../enums/user.enum';
import { SigninDto } from './dto/SigninDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwt: JwtService){}

    async signup(signupDto: SignupDto){

        let user = this.userRepository.create(signupDto)
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(signupDto.password, salt);
        
        user.password = password
        user.active = true
        user.role = UserEnum.USER
        user = await this.userRepository.save(user)

        delete user.password

        return { user }
    }

    async removeUser(id: number){
        
        // const user:any = await this.userRepository.findOneBy({ id: id })
        // await this.userRepository.remove(user)

        // return { user }
    }

    async signin(signinDto: SigninDto){

        let user: any = await this.userRepository.findOne({where: { email: signinDto.email }})
        
        if(!user){
            throw new NotFoundException(`Identité ou mot de passe erroné`)
        }
        
        
        if(!await bcrypt.compare(signinDto.password, user.password)){
            throw new NotFoundException(`Identité ou mot de passe erronée`)
        }

        if(!user.active){
            throw new NotFoundException(`Votre compte est en attente de validation`)
        }
        
        
        return {
            token: await this.signToken(user)
        }

    }

    async signToken(user: User): Promise<string>{
        delete user.password, user.token
        
        const payload = {
            ...user
        }

        return await this.jwt.signAsync(payload, {
            expiresIn: '60m',
            secret: process.env.JWT_SECRET
        })
    }
}
