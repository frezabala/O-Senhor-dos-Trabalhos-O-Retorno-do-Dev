import { Request, Response } from 'express'
import { EffectService } from '../services/EffectService'
const service = new EffectService()

export class EffectController{
    async get(req:Request,res:Response){
        try{
            const eff = await service.getbyId(req.body)
            res.json(eff)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }

}