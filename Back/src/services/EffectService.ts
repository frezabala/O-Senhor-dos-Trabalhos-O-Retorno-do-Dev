import { AppDataSource } from '../data-source'
import { Effect } from '../entities/Effect'

export class EffectService{
    private repo = AppDataSource.getRepository(Effect)

    async getbyId(id:number){
        const eff = this.repo.findOne({where:{id:id}})
        if(!eff){
            throw new Error("Effect not found")
        }
        return eff
    }
}