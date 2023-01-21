import { IsNotEmpty } from "class-validator"

export class SigninDto {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}