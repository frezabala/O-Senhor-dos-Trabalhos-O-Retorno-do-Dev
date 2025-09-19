import { AppDataSource } from '../data-source'
import { Tile } from '../entities/Tile'

export class TileService{
    private repo = AppDataSource.getRepository(Tile)

    async getbyId(id:number){
        const tile = await this.repo.findOne({where:{id:id}})
        if(!tile){
            throw new Error("Tile not found")
        }
        return tile;
    }
    async list(){
        const tiles = await this.repo.find()
        if(!tiles){
            throw new Error("Tiles not Found")
        }
        return tiles
    }
}