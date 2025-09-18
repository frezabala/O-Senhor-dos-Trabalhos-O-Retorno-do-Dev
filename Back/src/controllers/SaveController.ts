import { Request, Response } from 'express'
import { SaveService } from '../services/SaveService'

const service = new SaveService()

export class SaveController{
    async create(req:Request,res:Response){
        try{
            const save = await service.create((req as any).user.id,req.body.name)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async get(req:Request,res:Response){
        try{
            const save = await service.getbyid(req.body.id)
            res.json(save)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
    async list(req:Request,res:Response){
        try{
            const saves = await service.listbyUser((req as any).user.id)
            res.json(saves)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async update(req:Request,res:Response){
        try{
            const save = await service.update(req.body.id, req.body)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async remove(req:Request,res:Response){
        try{
            const result = await service.remove(req.body.id)
            res.json(result)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
    async addChar(req:Request,res:Response){
        try{
            const save = await service.addCharacter(req.body.id,req.body)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
}