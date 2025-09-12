import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { generateToken } from '../utils/jwt'

const service = new UserService()

export class AuthController{
    async register(req: Request, res: Response){
        try{
            const user = await service.create(req.body)
            const token = generateToken({ id: user.id, email: user.email })
            res.status(201).json({user, token})
        }catch(err:any){
            res.status(400).json({ message: err.message })
        }
    }
    async login(req: Request, res: Response){
        try{
            
        }catch(err:any){
            res.status(400).json({ message: err.message })
        }
    }
}