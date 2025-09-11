import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, OneToOne} from 'typeorm'
import { User } from './User'

@Entity('rankings')
export class Ranking{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @OneToOne(() => User)
    user:User
}