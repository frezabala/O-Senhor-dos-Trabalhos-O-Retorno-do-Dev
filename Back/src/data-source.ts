import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { config } from 'dotenv'
import { User } from './entities/User'
import { Character } from './entities/Character'
import { Tile } from './entities/Tile'
import { Ranking } from './entities/Ranking'
import { Item } from './entities/Item'

config()

export const AppDataSource = new DataSource({
    type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User,Character,Tile,Ranking,Item],
  synchronize: true, // Temporario TESTE
  logging: true
})