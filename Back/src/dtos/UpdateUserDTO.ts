import { IsEmail, Matches, MinLength, IsOptional } from "class-validator";

export class UpdateUserDTO{
    @IsOptional()
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Name must only have letters and spaces" })
    name:string;

    @IsOptional()
    @IsEmail({},{message:"Invalid Email"})
    email:string;

    @IsOptional()
    @MinLength(6, { message: "Password must be at least 6 letters long" })
    password:string;
}