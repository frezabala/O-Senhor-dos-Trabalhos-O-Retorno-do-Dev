import { Matches, IsOptional } from "class-validator";

export class UpdateSaveDTO{

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
    hasGiml:boolean
    
    @IsOptional()
    gimbHealth:number
    
    @IsOptional()
    gimlLevel:number
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
    tileslocalx: number

    @IsOptional()    
    tileslocaly: number
    
    @IsOptional()
    items:number
    
    @IsOptional()
    won:boolean
}