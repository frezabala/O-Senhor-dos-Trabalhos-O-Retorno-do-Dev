import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { Effect } from './Effect'

@Entity('items')
export class Item{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    amount:number

    @Column()
    effect:Effect[] //os efeitos do item (força, cura, dano magico, dano fisico...) podendo misturar 2 efeitos ou ate mais em 1 item, como uma poção que cura E da força a um personagem 

    @Column()
    targetEnemies:boolean //define se o item so pode ser usado em inimigos (true) ou aliados (false)

}