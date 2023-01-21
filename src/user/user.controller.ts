import { Body, Controller, Post } from '@nestjs/common';
import { SigninDto } from './dto/SigninDto';
import { SignupDto } from './dto/SignupDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post('signup')
    signup( @Body() signupDto: SignupDto){
        return this.userService.signup(signupDto)
    }

    @Post('remove')
    remove(@Body('id') id: number){
        return this.userService.removeUser(id)
    }

    @Post('signin')
    signin( @Body() signinDto: SigninDto){
        return this.userService.signin(signinDto)
    }
}
