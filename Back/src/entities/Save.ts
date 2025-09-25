import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm'
import { User } from './User'

@Entity('saves')
export class Save{
    @PrimaryGeneratedColumn()
    id:number

    //sam
    @Column()
    mainHealth:number

    @Column({nullable: true,default:1})
    mainLevel:number
    //arag 2
    @Column({nullable: true,default:false})
    hasAra:boolean

    @Column({nullable: true,default:0})
    araHealth:number

    @Column({nullable: true,default:0})
    araLevel:number
    //gimb 3
    @Column({nullable: true,default:false})
    hasGiml:boolean

    @Column({nullable: true,default:0})
    gimlHealth:number

    @Column({nullable: true,default:0})
    gimlLevel:number
    //legol 4
    @Column({nullable: true,default:false})   
    hasLego:boolean

    @Column({nullable: true,default:0})
    legoHealth:number

    @Column({nullable: true,default:0})
    legoLevel:number
    //boro 5
    @Column({nullable: true,default:false})
    hasBoro:boolean

    @Column({nullable: true,default:0})
    boroHealth:number

    @Column({nullable: true,default:0})
    boroLevel:number
    //gandal 6
    @Column({nullable: true,default:false})
    hasGandal:boolean

    @Column({nullable: true,default:0})
    gandalHealth:number

    @Column({nullable: true,default:0})
    gandalLevel:number

    @Column({nullable: true,default:0})
    tilesLocalX: number

    @Column({nullable: true,default:0})
    tilesLocalY:number

    @Column({nullable: true,default:0})
    items:number

    @Column({nullable: true,default:false})
    won:boolean

    //@Column({nullable: true})
    //ranking:string

    @OneToOne(() => User,{cascade: true})
    @JoinColumn()
    user:User

    @CreateDateColumn({nullable: true})
    createdAt:Date

    @UpdateDateColumn({nullable: true})
    updatedAt:Date

}