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
    async getByName(name:string){
        const char = await this.repo.findOne({where:{name:name}})
        if(!char){
            throw new Error("Character not found")
        }
        return char
    }
    async calcDamage(data:{baseDamage:number, defense:number, statusEffect?:string, statusEffectTarget?:string}){
        let damage = Math.floor(Math.random() * data.baseDamage) + 1
        if(data.statusEffect){
            if(data.statusEffect === "Strenght" || data.statusEffect === "strenght" || data.statusEffect === "força" || data.statusEffect === "forca"){
                damage = damage * 2
            }
            if(data.statusEffect === "Weakness" || data.statusEffect === "weakness" || data.statusEffect === "fraqueza" || data.statusEffect === "Fraqueza"){
                damage = damage / 2
            }
        }
        if(data.statusEffectTarget){
            if(data.statusEffectTarget === "Strenght" || data.statusEffect === "strenght" || data.statusEffect === "força" || data.statusEffect === "forca"){
                data.defense = data.defense * 2
            }
            if(data.statusEffectTarget === "Weakness" || data.statusEffect === "weakness" || data.statusEffect === "fraqueza" || data.statusEffect === "Fraqueza"){
                data.defense = data.defense / 2
            }
        }
        damage -= data.defense
        if(damage < 0){
            damage = 0
        }
        return damage;
    }

}