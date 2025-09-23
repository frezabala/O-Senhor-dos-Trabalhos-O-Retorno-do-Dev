import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('effects')
export class Effect{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string //o que o efeito é (fonça, fraqueza...)

    @Column()
    strenght:number //define o quão forte o efeito vai ser, como cura: 20 ou dano:10 variando dependendo do efeito definido

    @Column()
    duration:number //quantos rounds vai durar, quando chegar a 0 effeito acaba

    @Column()
    special:string //decide algo especial como extra dano em orcs
}