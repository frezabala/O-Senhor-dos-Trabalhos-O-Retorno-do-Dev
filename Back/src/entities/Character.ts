import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'
import { Effect } from './Effect'

@Entity('characters')
export class Character{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    baseDamage:number

    @Column()
    defense:number //defense against phisical attacks

    @Column()
    magicRes:number //defense against magic attacks

    @Column()
    health:number

    @Column()
    totalHealth:number

    @ManyToMany(() => Effect)
    effects: Effect[] //effects the character is suffering from (weakness, reduced accuracy, strenght, healing...)
}