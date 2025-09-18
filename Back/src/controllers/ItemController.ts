import { Request, Response } from 'express'
import { ItemService } from '../services/ItemService'

const service = new ItemService()

export class ItemController{
    async get(req:Request,res:Response){
        try{
            const item = await service.getbyId(req.body)
            res.json(item)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
}