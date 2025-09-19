import jwt from 'jsonwebtoken'

interface Payload{ //interface do payload
    id:number //precisa de id
    email:string //precisa de email
}

export const generateToken = (payload:Payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {expiresIn: Number(process.env.JWT_EXPIRES_IN)}) // gera token com payload, o jwtSecret do .env e o tempo salvo no jwtExpiresIn no .env
}
export const verifyToken = (token:string) =>{ //recebe uma string token para verificar
    try{
        return jwt.verify(token,process.env.JWT_SECRET!) //usa função verificar para decodificar o token, função recebe a string token e o jwtSecret do .env
    }catch(err){
        return null //retorna null se houver erro
    }
}