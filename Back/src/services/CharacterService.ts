import { AppDataSource } from '../data-source'
import { Character } from '../entities/Character'

export class CharacterService{
    private repo = AppDataSource.getRepository(Character)

    //busca personagem por id
    async getbyid(id:number){
        const char = await this.repo.findOne({where:{id: id}})
        if(!char){
            throw new Error("Character not found")
        }
        return char
    }
    //n sei pq fiz essa função mas ela ta ai, busca personagem por nome ja q todos tem nomes unicos
    async getByName(name:string){
        const char = await this.repo.findOne({where:{name:name}})
        if(!char){
            throw new Error("Character not found")
        }
        return char
    }
    //função simples de calculo de dano
    async calcDamage(data:{baseDamage:number, defense:number, statusEffect?:string, statusEffectTarget?:string}){
        let damage = Math.floor(Math.random() * data.baseDamage) + 1 // numero aleatorio entre 1 e baseDamage
        if(data.statusEffect){ //verifica se tem algum effeito no attacante
            if(data.statusEffect === "Strenght" || data.statusEffect === "strenght" || data.statusEffect === "força" || data.statusEffect === "forca"){
                damage = damage * 2 //se efeito = força dano multiplica por 2
            }
            if(data.statusEffect === "Weakness" || data.statusEffect === "weakness" || data.statusEffect === "fraqueza" || data.statusEffect === "Fraqueza"){
                damage = damage / 2 // se efeito = fraqueza dano divide por 2
            }
        }
        if(data.statusEffectTarget){ //verifica se tem algum effeito no alvo
            if(data.statusEffectTarget === "Strenght" || data.statusEffect === "strenght" || data.statusEffect === "força" || data.statusEffect === "forca"){
                data.defense = data.defense * 2 //se efeito força defesa multiplica por 2
            }
            if(data.statusEffectTarget === "Weakness" || data.statusEffect === "weakness" || data.statusEffect === "fraqueza" || data.statusEffect === "Fraqueza"){
                data.defense = data.defense / 2 //se efeito fraquesa defesa divide por 2
            }
        }
        damage -= data.defense // subtrai do dano o numero da defesa
        if(damage < 0){ //se dano menor q 0 OU SEJA negativo faz o dano reverter devolta pra 0
            damage = 0
        }
        return damage; //retorna o dano
    }

}