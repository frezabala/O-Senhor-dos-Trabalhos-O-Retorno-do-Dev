import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany} from 'typeorm'
import { Character } from './Character'
import { Tile } from './Tile'
import { Item } from './Item'
import { User } from './User'

@Entity('saves')
export class Save{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToMany(() => Character)
    characters:Character[]

    @ManyToMany(() => Tile)
    tilesPassed: Tile[]

    @ManyToMany(() => Item)
    items:Item[]

    @Column()
    won:boolean

    @Column({nullable: true})
    ranking:string

    @ManyToOne(() => User, user => user.saves)
    user:User

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}