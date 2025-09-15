import { AppDataSource } from '../data-source'
import { Save } from '../entities/Save'
import { CharacterService } from './CharacterService'
import { Character } from '../entities/Character'
import { Item } from '../entities/Item'
import { Tile } from '../entities/Tile'

export class SaveService{
    private charser = new CharacterService()
    private repo = AppDataSource.getRepository(Save)

    async create(name:string,userId:number){
        let main: Character[] = [];
        main.push(await this.charser.getbyid(1))
        const won =false
        const data = {name,main,won,userId}
        const save = this.repo.create(data)
        return await this.repo.save(save)
    }
    /*
    async getbyid(id:number){
        const save = await this.repo.findOne({where:{id: id}})
        if(!save){
            throw new Error("Save not found")
        }
        return save;
    }
    async update(id:number, name:string){
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.name = name
        return await this.repo.save(save)
    }
    async addCharacter(id:number,char:Character){ 
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.characters.push(char)
        return await this.repo.save(save)
    }   
    async addItem(id:number,item:Item){
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.items.push(item)
        return await this.repo.save(save)
    }
    async tilesPassed(id:number,tile:Tile){
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.tilesPassed.push(tile)
        return await this.repo.save(save)
    }
    async won(id:number){
        //set won true
        //set ranking
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.won =true
        if(save.tilesPassed.length < 7){
            save.ranking = "Lendario"
        }else{
            save.ranking = "RUIN!"
        }
        return await this.repo.save(save)
    }
    async remove(id:number){
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        await this.repo.delete(save)
        return {message: "Save Removed"}
    }*/
}