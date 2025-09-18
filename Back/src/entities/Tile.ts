import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from 'typeorm'
import { Character } from './Character'
import { Item } from './Item'

@Entity('tiles')
export class Tile{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    level:number

    @ManyToMany(() => Character)
    enemies: Character[]

    @ManyToOne(() => Character)
    character: Character

    @ManyToOne(() => Item)
    reward:Item
}   