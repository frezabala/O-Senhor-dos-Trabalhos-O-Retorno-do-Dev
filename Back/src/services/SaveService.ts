import { AppDataSource } from '../data-source'
import { Save } from '../entities/Save'
import { User } from '../entities/User'
import { CharacterService } from './CharacterService'
import { UserService } from './UserService'

export class SaveService{
    //pega os outros services pra reaproveitar codigo n ter q ficar tirando senha de usuario ou ifs de verificação para ver se existe ou n
    private charser = new CharacterService()
    private repo = AppDataSource.getRepository(Save)
    private userser = new UserService()

    async create(data: {mainHealth:number,user:Partial<User>}){
        // const won:boolean =false //como default no inicio a variavel won é sempre falso
        // const mainLevel:number = 1 //como default no inicio o usuario sempre vai ter o personagem id 1 na party (sam)
        // const sam = await this.charser.getbyid(1)
        // const user = await this.userser.findbyId(userId) // encontra o usuario para adicionar no save como o responsavel pelo save
        // const mainHealth:number = sam.health // pega a vida do personagem id 1 e salva ela (sam)
        // const data = {mainHealth,mainLevel,won,user} //junta tudo em um save partial (incompleto)
        const save = this.repo.create(data)
        return await this.repo.save(save)
    }
    async getbyid(userId:number){
        const user = await this.userser.findbyId(userId)
        const save = await this.repo.findOne({where:{user:user}})
        return save;
    }
    //async listbyUser(userId:number){ //para listar todos os saves de um usuario especifico, utilizado para visualização em uma tela de saves
    //    const user:any = await this.userser.findbyId(userId)
    //    const saves: Save[] = await this.repo.find({where:{user:user}})
    //    return saves
    //}
    async update(idUser:number, data:Partial<Save>){ //update das informações feito para modificações pequenas como (nome, data, vida restante do personagem)
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        Object.assign(save,data)
        return await this.repo.save(save)
    }
    //função especifica para adicionar personagem tecnicamente pode ser feito no update mas eu fiz isso pra impedir adição de personagens invalidos (id = 1 ou id > 6)
    async addCharacter(idUser:number,charId:number){ 
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
        if(!save){
            throw new Error("Save not found")
        }else
        if(charId === 2){
            save.hasAra = true
            save.araLevel = 1
            save.araHeath = (await this.charser.getbyid(2)).health
        }else
        if(charId === 4){
            save.hasGimb = true
            save.gimlLevel = 1
            save.gimlHealth = (await this.charser.getbyid(3)).health
        }else
        if(charId === 3){
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
    async addItem(idUser:number,itemNum:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        save.items = itemNum
        return await this.repo.save(save)
    }
    //função adicionar tiles (quadrados) que foram passadas
    async tilesPassed(tileX:number, tileY:number,idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        save.tileslocalx = tileX
        save.tilesLocaly = tileY
        return await this.repo.save(save)
    }
    async won(idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
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
    async remove(idUser:number){
        const user = await this.userser.findbyId(idUser)
        const save = await this.repo.findOne({where:{user:user}})
        if(!save){
            throw new Error("Save not found")
        }
        await this.repo.remove(save) // por algum motivo a função remove n funcionou então eu usei a delete e dei o ID, por isso é essencial verificar se o usuario é o mesmo do save para n haver riscos de um usuario deletar um save de outro
        return {message: 'Save Removed'} //retorna mensagem de sucesso
    }
}