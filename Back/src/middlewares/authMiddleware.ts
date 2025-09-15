import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:"No Token found"})
    }
    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)
    if(!decoded){
        return res.status(401).json({message:"invalid Token"})
    }
    (req as any).user = decoded
    next();
}