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
    defense:number //Defesa contra ataques fisicos

    //@Column()
    //magicRes:number //Defesa contra ataques magicos

    @Column()
    health:number

    @Column()
    totalHealth:number

    //@ManyToMany(() => Effect)
    //effects: Effect[] //Effeito que o personagem esta sobre com (fraqueza, precisão reduzida, força, cura)
}