import { AppDataSource } from '../data-source'
import { Save } from '../entities/Save'
import { CharacterService } from './CharacterService'
import { Item } from '../entities/Item'
import { Tile } from '../entities/Tile'
import { User } from '../entities/User'

export class SaveService{
    private charser = new CharacterService()
    private repo = AppDataSource.getRepository(Save)
    private userRepo = AppDataSource.getRepository(User)

    async create(userId:number,name:string){
        const won:boolean =false
        const mainLevel:number = 1
        const user:any = await this.userRepo.findOne({where:{id:userId}})
        delete user.password
        if(!user){
            throw new Error("User not found")
        }
        const mainHealth:number = (await this.charser.getbyid(1)).health
        const data:Partial<Save> = {name,mainHealth,mainLevel,won,user}
        const save = this.repo.create(data)
        return await this.repo.save(save)
    }
    async getbyid(id:number){
        const save = await this.repo.findOne({where:{id: id}})
        if(!save){
            throw new Error("Save not found")
        }
        return save;
    }
    async listbyUser(userId:number){
        const user = await this.userRepo.findOne({where:{id:userId}})
        if(!user){
            throw new Error("User not found")
        }
        const saves: Save[] = await this.repo.find({where:{user:user}})
        return saves
    }
    async update(id:number, data:Partial<Save>){
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        Object.assign(save,data)
        return await this.repo.save(save)
    }
    //função especifica para adicionar personagem tecnicamente pode ser feito no update mas eu fiz isso pra impedir adição de personagens invalidos (id = 1 ou id > 6)
    async addCharacter(id:number,charId:number){ 
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }else
        if(charId === 2){
            save.hasAra = true
            save.araLevel = 1
            save.araHeath = (await this.charser.getbyid(2)).health
        }else
        if(charId === 3){
            save.hasGimb = true
            save.gimbLevel = 1
            save.gimbHealth = (await this.charser.getbyid(3)).health
        }else
        if(charId === 4){
            save.hasLego = true
            save.legoLevel = 1
            save.legoHealth = (await this.charser.getbyid(4)).health
        }else
        if(charId === 5){
            save.hasBoro = true
            save.boroLevel = 1
            save.boroHealth = (await this.charser.getbyid(5)).health
        }else
        if(charId === 6){
            save.hasGandal = true
            save.gandalLevel = 1
            save.gandalHealth = (await this.charser.getbyid(6)).health
        }else{
            throw new Error("Character id not allowed for this action")
        }
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
        //deixa won = true
        //da o ranking dependendo nas tiles passadas
        const save = await this.repo.findOne({where:{id:id}})
        if(!save){
            throw new Error("Save not found")
        }
        save.won =true
        if(save.tilesPassed.length < 6){
            save.ranking = "Lendario"
        }else if(save.tilesPassed.length <= 10){
            save.ranking = "Aceitavel"
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
        await this.repo.delete(id)
        return {message: 'Save Removed'}
    }
}