import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization //pega authorization do headers
    if(!authHeader || !authHeader.startsWith('Bearer ')){ //verifica se existe e começa com Bearer
        return res.status(401).json({message:"No Token found"})// se n retorna erro
    }
    const token = authHeader.split(' ')[1] // separa token do Bearer
    const decoded = verifyToken(token) // decodifica token con função verifyToken do jwt
    if(!decoded){ // se n retornar nada retorna erro
        return res.status(401).json({message:"invalid Token"})
    }
    (req as any).user = decoded //salva informações decodificadas
    next(); //continua requisição
}