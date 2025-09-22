import { AppDataSource } from '../data-source'
import { Save } from '../entities/Save'
import { CharacterService } from './CharacterService'
import { ItemService } from './ItemService'
import { UserService } from './UserService'
import { TileService } from './TileService'

export class SaveService{
    //pega os outros services pra reaproveitar codigo n ter q ficar tirando senha de usuario ou ifs de verificação para ver se existe ou n
    private charser = new CharacterService()
    private repo = AppDataSource.getRepository(Save)
    private userser = new UserService()
    private tileser = new TileService()
    private itemser = new ItemService()

    async create(userId:number,name:string){
        const won:boolean =false //como default no inicio a variavel won é sempre falso
        const mainLevel:number = 1 //como default no inicio o usuario sempre vai ter o personagem id 1 na party (sam)
        const user = await this.userser.findbyId(userId) // encontra o usuario para adicionar no save como o responsavel pelo save
        const mainHealth:number = (await this.charser.getbyid(1)).health // pega a vida do personagem id 1 e salva ela (sam)
        const data:Partial<Save> = {name,mainHealth,mainLevel,won,user} //junta tudo em um save partial (incompleto)
        const save = this.repo.create(data)
        return await this.repo.save(save)
    }
    async getbyid(id:number,userId:number){
        const user = await this.userser.findbyId(userId)
        const save = await this.repo.findOne({where:{id: id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        return save;
    }
    async listbyUser(userId:number){ //para listar todos os saves de um usuario especifico, utilizado para visualização em uma tela de saves
        const user:any = await this.userser.findbyId(userId)
        const saves: Save[] = await this.repo.find({where:{user:user}})
        return saves
    }
    async update(id:number, idUser:number, data:Partial<Save>){ //update das informações feito para modificações pequenas como (nome, data, vida restante do personagem)
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{id:id,user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        Object.assign(save,data)
        return await this.repo.save(save)
    }
    //função especifica para adicionar personagem tecnicamente pode ser feito no update mas eu fiz isso pra impedir adição de personagens invalidos (id = 1 ou id > 6)
    async addCharacter(id:number, idUser:number,charId:number){ 
        const user = await this.userser.findbyId(idUser)
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
    //função para adicionar item
    async addItem(id:number, idUser:number,itemId:number){
        const user:any = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        const item = await this.itemser.getbyId(itemId)//busca item
        if(!item){ //ts reclama se n tiver esse if mas n vai cair nele pois no service de item ja tem uma verificação se ele existe
            throw new Error("Item not found")
        }
        save.items.push(item)
        return await this.repo.save(save)
    }
    //função adicionar tiles (quadrados) que foram passadas
    async tilesPassed(id:number,tileId:number,idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        const tile = await this.tileser.getbyId(tileId) //encontra tile salva no banco
        save.tilesPassed.push(tile) //adiciona no array de tiles do save
        return await this.repo.save(save)
    }
    async won(id:number, idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        save.won =true //modifica variavel won(venceu) para true
        //if(save.tilesPassed.length < 6){ //da o ranking de acordo com a quantidade de tiles passadas, quanto menos melhor!
        //    save.ranking = "Lendario"
        //}else if(save.tilesPassed.length <= 10){
        //    save.ranking = "Aceitavel"
        //}else{
        //    save.ranking = "RUIN!"
        //}
        return await this.repo.save(save)
    }
    async remove(id:number, idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{id:id, user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        await this.repo.delete(id) // por algum motivo a função remove n funcionou então eu usei a delete e dei o ID, por isso é essencial verificar se o usuario é o mesmo do save para n haver riscos de um usuario deletar um save de outro
        return {message: 'Save Removed'} //retorna mensagem de sucesso
    }
}