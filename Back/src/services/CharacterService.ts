import { AppDataSource } from '../data-source'
import { Character } from '../entities/Character'

export class CharacterService{
    private repo = AppDataSource.getRepository(Character)

    async getbyid(id:number){
        const char = await this.repo.findOne({where:{id: id}})
        if(!char){
            throw new Error("Character not found")
        }
        return char
    }
}