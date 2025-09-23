import { Matches, IsOptional } from "class-validator";
import { Item } from "../entities/Item";
import { Tile } from "../entities/Tile";

export class UpdateSaveDTO{
    @IsOptional()
    @Matches(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Name must only have letters and spaces" })
    name:string

    @IsOptional()
    mainHealth:number

    @IsOptional()
    mainLevel:number
    //arag 2
    @IsOptional()
    hasAra:boolean
    
    @IsOptional()
    araHeath:number
    
    @IsOptional()
    araLevel:number
    //gimb 3
    @IsOptional()
    hasGimb:boolean
    
    @IsOptional()
    gimbHealth:number
    
    @IsOptional()
    gimbLevel:number
    //legol 4
    @IsOptional()  
    hasLego:boolean
    
    @IsOptional()
    legoHealth:number
    
    @IsOptional()
    legoLevel:number
    //boro 5
    @IsOptional()
    hasBoro:boolean
    
    @IsOptional()
    boroHealth:number
    
    @IsOptional()
    boroLevel:number
        //gandal 6
    @IsOptional()
    hasGandal:boolean
    
    @IsOptional()
    gandalHealth:number
    
    @IsOptional()
    gandalLevel:number
    
    @IsOptional()
    tilesPassed: Tile[]
    
    @IsOptional()
    items:Item[]
    
    @IsOptional()
    won:boolean
    
    @IsOptional()
    ranking:string
}