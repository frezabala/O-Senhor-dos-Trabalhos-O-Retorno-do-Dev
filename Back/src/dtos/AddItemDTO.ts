import {IsNotEmpty} from "class-validator";

export class AddItemDTO{
    @IsNotEmpty({message: "SaveId cannot be null"})
    id:number;

    @IsNotEmpty({message: "ItemNum cannot be null"})
    itemNum:number
}