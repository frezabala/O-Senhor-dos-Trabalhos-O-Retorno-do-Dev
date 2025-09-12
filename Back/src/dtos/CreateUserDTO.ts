import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsNotEmpty({message: "Name cannot be null"})
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Nome deve conter apenas letras e espaços" })
    name:string;
    @IsNotEmpty({message: "Email cannot be null"})
    @IsEmail({},{message:"Invalid Email"})
    email:string;
    @IsNotEmpty({message: "Password cannot be null"})
    @MinLength(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    password:string;
}