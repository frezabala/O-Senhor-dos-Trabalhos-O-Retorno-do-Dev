import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('characters')
export class Character{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    baseDamage:number

    @Column()
    health:number

    @Column()
    totalHealth:number
}