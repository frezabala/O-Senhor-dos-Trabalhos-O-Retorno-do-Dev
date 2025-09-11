import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

export class UserService{
    private repo = AppDataSource.getRepository(User)

    async create(data: { name: string; email: string; password: string }){
        const exists = await this.repo.findOne({where: { email: data.email}})
        if(exists){
            throw new Error("Email already in use")
        }
        const user = this.repo.create(data)
        return await this.repo.save(user)
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

    async update(id:number, data:Partial<User>){
        const user = await this.repo.findOne({where:{ id: id}})
        if(!user){
            throw new Error("User not found")
        }
        if(data.password){
            user.password = data.password
        }
        const {password, ...rest} = data
        Object.assign(user,rest)
        return await this.repo.save(user)
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