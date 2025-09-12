import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from 'typeorm'
import bcrypt from 'bcrypt'
import { Character } from './Character'
import { Tile } from './Tile'
import { Ranking } from './Ranking'
import { Item } from './Item'

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({ length: 120})
    name:string

    @Column({ unique: true, length: 160 })
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    save: Save[]

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
     if(!this.password.startsWith('$2')){
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS);
        this.password = await bcrypt.hash(this.password,rounds);
     }
    }
    async validatePassword(plain: string): Promise<boolean>{
        return bcrypt.compare(plain,this.password);
    }
}

interface Save{
    Savename:string
    characters:Character[]
    items:Item[]
    tilesDefeated:Tile[]
    lastPlayed:Date
    ranking:Ranking
    won:boolean
}
