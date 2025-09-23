import { Request, Response } from 'express'
import { TileService } from '../services/TileService'

const service = new TileService()

export class TileController{
    async get(req:Request,res:Response){
        try{
            const item = await service.getbyId(req.body)
            res.json(item)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
    async list(req:Request,res:Response){
        try{
            const item = await service.list()
            res.json(item)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
}