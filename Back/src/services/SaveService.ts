import { AppDataSource } from '../data-source'
import { Save } from '../entities/Save'
import { CharacterService } from './CharacterService'
import { Item } from '../entities/Item'
import { Tile } from '../entities/Tile'
import { User } from '../entities/User'
import { ItemService } from './ItemService'

export class SaveService{
    private charser = new CharacterService()
    private repo = AppDataSource.getRepository(Save)
    private userRepo = AppDataSource.getRepository(User)
    private tileRepo = AppDataSource.getRepository(Tile)
    private itemser = new ItemService()

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
    async getbyid(id:number,userId:number){
        const user = await this.userRepo.findOne({where:{id:userId}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id: id, user:user}})
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
    async update(id:number, idUser:number, data:Partial<Save>){
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id,user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        Object.assign(save,data)
        return await this.repo.save(save)
    }
    //função especifica para adicionar personagem tecnicamente pode ser feito no update mas eu fiz isso pra impedir adição de personagens invalidos (id = 1 ou id > 6)
    async addCharacter(id:number, idUser:number,charId:number){ 
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id,user:user}})
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
    async addItem(id:number, idUser:number,itemId:number){
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        const item = await this.itemser.getbyId(itemId)
        if(!item){
            throw new Error("Item not found")
        }
        save.items.push(item)
        return await this.repo.save(save)
    }
    async tilesPassed(id:number,tileId:number,idUser:number){
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        const tile = await this.tileRepo.findOne({where:{id: tileId}})
        if(!tile){
            throw new Error("Tile not found")
        }
        save.tilesPassed.push(tile)
        return await this.repo.save(save)
    }
    async won(id:number, idUser:number){
        //deixa won = true
        //da o ranking dependendo nas tiles passadas
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id, user:user}})
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
    async remove(id:number, idUser:number){
        const user = await this.userRepo.findOne({where:{id:idUser}})
        if(!user){
            throw new Error("User not Found")
        }
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        await this.repo.delete(id)
        return {message: 'Save Removed'}
    }
}