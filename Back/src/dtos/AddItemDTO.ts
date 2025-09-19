import {IsNotEmpty} from "class-validator";

export class AddItemDTO{
    @IsNotEmpty({message: "SaveId cannot be null"})
    id:number;

    @IsNotEmpty({message: "ItemId cannot be null"})
    itemId:number
}