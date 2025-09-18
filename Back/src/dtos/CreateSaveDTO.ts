import {IsNotEmpty, Matches} from "class-validator";

export class CreateSaveDTO{
    @IsNotEmpty({message: "Name cannot be null"})
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Name must only have letters and spaces" })
    name:string;
}