import { Request, Response } from 'express'
import { CharacterService } from '../services/CharacterService'

const service = new CharacterService()

export class CharacterController{
    async get(req:Request,res:Response){
        try{
            const char = await service.getbyid(req.body)
            res.json(char)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
    async getbyName(req:Request,res:Response){
        try{
            const char = await service.getByName(req.body)
            res.json(char)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }

    async findAll(req:Request,res:Response){
        try{
            const chars = await service.getAll()
            res.json(chars)
        }catch(e:any){
            res.status(404).json({message: e.mensagem}) 
        }
    }
    
    async calculateDamage(req:Request,res:Response){
        try{
            const dam = await service.calcDamage(req.body)
            res.json(dam)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
}