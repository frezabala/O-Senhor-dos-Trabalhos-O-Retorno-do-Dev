import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { Character } from './Character'
import { Item } from './Item'

@Entity('tiles')
export class Tile{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    level:number

    @Column()
    enemies: Character[]

    @Column({nullable: true})
    character: Character

    @Column()
    reward:Item

    @Column()
    defeated:boolean
}   