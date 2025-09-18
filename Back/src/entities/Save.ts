import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany} from 'typeorm'
import { Tile } from './Tile'
import { Item } from './Item'
import { User } from './User'

@Entity('saves')
export class Save{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
    //sam
    @Column()
    mainHealth:number

    @Column()
    mainLevel:number
    //arag 2
    @Column({nullable: true})
    hasAra:boolean

    @Column({nullable: true})
    araHeath:number

    @Column({nullable: true})
    araLevel:number
    //gimb 3
    @Column({nullable: true})
    hasGimb:boolean

    @Column({nullable: true})
    gimbHealth:number

    @Column({nullable: true})
    gimbLevel:number
    //legol 4
    @Column({nullable: true})   
    hasLego:boolean

    @Column({nullable: true})
    legoHealth:number

    @Column({nullable: true})
    legoLevel:number
    //boro 5
    @Column({nullable: true})
    hasBoro:boolean

    @Column({nullable: true})
    boroHealth:number

    @Column({nullable: true})
    boroLevel:number
    //gandal 6
    @Column({nullable: true})
    hasGandal:boolean

    @Column({nullable: true})
    gandalHealth:number

    @Column({nullable: true})
    gandalLevel:number

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