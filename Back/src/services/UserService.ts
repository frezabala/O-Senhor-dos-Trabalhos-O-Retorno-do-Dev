import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

export class UserService{
    private repo = AppDataSource.getRepository(User)

    async create(data: { name: string; email: string; password: string }){ //informações são entregues como um objeto data ao em vez de variaveis separadas, isso facilita pois assim no controller eu posso entregar o req.body ao em vez de ter que buscar por cada variavel separadamente
        const exists = await this.repo.findOne({where: { email: data.email}})//verifica se o email ja esta cadastrado
        if(exists){
            throw new Error("Email already in use")//impede a continuação do codigo se email existe no banco
        }
        const user = this.repo.create(data) //cria usuario com as informações dadas
        const user2:any = await this.repo.save(user) //salca usuario no repositorio ao mesmo tempo q cria uma variavel com as informações para retornar depois
        delete user2.password //deleta senha antes de retornar por segurança
        return user2
    }

    async findbyId(id:number){
        const user = await this.repo.findOne({where:{id: id}})
        if(!user){
            throw new Error("User not found")
        }
        const clone:any = {...user}
        delete clone.password
        return clone
    }

    async findbyEmail(email:string){
        const user = await this.repo.findOne({where:{email:email}})
        if(!user){
            throw new Error("User not found")
        }
        return user;
    }

    async update(id:number, data:Partial<User>){
        const user = await this.repo.findOne({where:{ id: id}}) //procura usuario por id
        if(!user){
            throw new Error("User not found")
        }
        if(data.password){//se tem senha já adiciona ela
            user.password = data.password
        }
        const {password, ...rest} = data //separa senha do resto
        Object.assign(user,rest) //atribui o resto ao usuario
        const user2:any = await this.repo.save(user) //salva no banco e cria variavel para retorno
        delete user2.password //remove senha por segurança
        return user2 //retorna usuario
    }

    async remove(id:number){
        const user = await this.repo.findOne({where:{id:id}})
        if(!user){
            throw new Error("User not found")
        }
        await this.repo.remove(user)
        return {message: 'User removed'}
    }

}