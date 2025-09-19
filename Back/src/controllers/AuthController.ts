import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { generateToken } from '../utils/jwt'

const service = new UserService()

export class AuthController{
    async register(req: Request, res: Response){
        try{
            const user = await service.create(req.body)
            const token = generateToken({ id: user.id, email: user.email })// gera token ao registrar
            res.status(201).json({user, token}) //retorna token
        }catch(err:any){
            res.status(400).json({ message: err.message })
        }
    }
    async login(req: Request, res: Response){
        try{
            const { email, password} = req.body// pega email e senha do body
            const user = await service.findbyEmail(email) //busca email pra verificar se existe
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            const valid = await user.validatePassword(password) //valida senha com metodo da entidade User
            if(!valid){
                return res.status(401).json({message: "Wrong Password"})
            }
            const safe:any = {...user} //cria outra variavel com usuario
            delete safe.password //deleta senha de usuario novo por seguraça
            const token = generateToken({id: user.id, email: email}) //gera token
            res.json({user: safe, token}) //retorna usuario e token
        }catch(err:any){
            res.status(400).json({ message: err.message })
        }
    }
}