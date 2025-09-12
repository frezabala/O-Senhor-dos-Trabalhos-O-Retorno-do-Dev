import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const service = new UserService()

export class UserController {
    async getById(req: Request, res: Response){
        try{
            const user = await service.findbyId((req as any).user.id)
            res.json(res)
        }catch(err:any){
            res.status(404).json({message: err.mensagem})
        }
    }
    async update(req: Request, res: Response){
        try{
            const user = await service.update((req as any).user.id, req.body)
            res.json(user)
        }catch(err:any){
            res.status(400).json({message: err.mensagem})
        }
    }
    async remove(req: Request, res: Response){
        try{
            const result = await service.remove((req as any).user.id)
            res.json(result)
        }catch(err:any){
            res.status(404).json({message: err.mensagem})
        }
    }
}