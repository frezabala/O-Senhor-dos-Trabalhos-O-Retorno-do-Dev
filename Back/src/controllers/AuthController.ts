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
            const { email, password} = req.body
            const user = await service.findbyEmail(email)
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            const valid = await user.validatePassword(password)
            if(!valid){
                return res.status(401).json({message: "Wrong Password"})
            }
            const safe:any = {...user}
            delete safe.password
            const token = generateToken({id: user.id, email: email})
            res.json({user: safe, token})
        }catch(err:any){
            res.status(400).json({ message: err.message })
        }
    }
}