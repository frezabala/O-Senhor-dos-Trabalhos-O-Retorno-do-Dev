import {IsNotEmpty, IsOptional, Matches} from "class-validator";

export class calculateDamageDTO{
    @IsNotEmpty({message: "baseDamage cannot be null"})
    baseDamage:number;

    @IsNotEmpty({message: "Defense cannot be null"})
    defense:number

    @IsOptional()
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Status effects must only have letters and spaces" })
    statusEffect:string

    @IsOptional()
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Status effects must only have letters and spaces" })
    statusEffectTarget:string
}