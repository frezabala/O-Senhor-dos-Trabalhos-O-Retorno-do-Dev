import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('effects')
export class Effect{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string //what is the effect (strenght, weakness...)

    @Column()
    strenght:number //define o quão forte o efeito vai ser, como cura: 20 ou dano:10 variando dependendo do efeito definido

    @Column()
    duration:number //amount of rounds it will last for, once it reaches 0 effect goes out

    @Column()
    special:string //decide algo especial como extra dano em orcs
}