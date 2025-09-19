import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const service = new UserService()

//Todas funções pegam Id do usuario para impedir que um usuario acesse ou modifique outro usuario
// não ha necessidade de um metodo list ja que usuario n vai ver outros usuarios

export class UserController {
    async getById(req: Request, res: Response){
        try{
            const user = await service.findbyId((req as any).user.id)
            res.json(user)
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