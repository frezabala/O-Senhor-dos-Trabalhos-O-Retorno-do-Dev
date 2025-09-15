import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany} from 'typeorm'
import bcrypt from 'bcrypt'
import { Save } from './Save'

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

    
    @OneToMany(() => Save, (save) => save.user)
    saves: Save[]

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
