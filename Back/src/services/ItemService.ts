import { AppDataSource } from '../data-source'
import { Item } from '../entities/Item'

export class ItemService{
    private  repo = AppDataSource.getRepository(Item)

    async getbyId(id:number){
        const item = this.repo.findOne({where:{id:id}})
        if(!item){
            throw new Error("Item not found")
        }
        return item
    }
}