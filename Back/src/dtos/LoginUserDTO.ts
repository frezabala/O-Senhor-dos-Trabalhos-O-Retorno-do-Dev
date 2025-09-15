import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDTO{
    @IsNotEmpty()
    @IsEmail({},{message:"Invalid Email"})
    email:string

    @IsNotEmpty()
    password:string
}