import {IsNotEmpty} from "class-validator";

export class AddCharDTO{
    @IsNotEmpty({message: "SaveId cannot be null"})
    id:number;

    @IsNotEmpty({message: "ItemId cannot be null"})
    CharId:number
}