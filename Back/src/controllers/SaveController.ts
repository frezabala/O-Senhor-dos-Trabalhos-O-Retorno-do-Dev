import { Request, Response } from 'express'
import { SaveService } from '../services/SaveService'

const service = new SaveService()

//Todas funções pegam Id do usuario para impedir que um usuario acesse ou modifique um save de outro usuario

export class SaveController{
    async create(req:Request,res:Response){
        try{
            const save = await service.create((req as any).user.id) //(req as any).user.id pega o ID do usuario, req.body.name pega o valor Name na requisição
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async get(req:Request,res:Response){
        try{
            const save = await service.getbyid((req as any).user.id)
            res.json(save)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }

    async update(req:Request,res:Response){
        try{
            const save = await service.update((req as any).user.id, req.body)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async remove(req:Request,res:Response){
        try{
            const result = await service.remove((req as any).user.id)
            res.json(result)
        }catch(e:any){
            res.status(404).json({message: e.mensagem})
        }
    }
    async addChar(req:Request,res:Response){
        try{
            const save = await service.addCharacter((req as any).user.id, req.body.charId)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async saveWon(req:Request,res:Response){
        try{
            const save = await service.won((req as any).user.id)
            res.json(save)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
    async addItem(req:Request,res:Response){
        try{
            const save = await service.addItem((req as any).user.id, req.body.potions)
        }catch(e:any){
            res.status(400).json({message: e.mensagem})
        }
    }
}