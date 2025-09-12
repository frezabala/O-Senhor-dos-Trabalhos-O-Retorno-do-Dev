import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, OneToOne} from 'typeorm'


@Entity('rankings')
export class Ranking{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    points:number

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}