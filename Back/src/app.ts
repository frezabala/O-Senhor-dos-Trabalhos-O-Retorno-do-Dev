import express from 'express'
import { config } from 'dotenv'
import routes from './routes'
import cors from "cors";
import path from 'path';

config()
const app = express()

app.use(cors())
app.use(express.json())

// Servir arquivos estáticos da pasta src/public 
app.use(express.static(path.join(__dirname, 'public')))

// Rota raiz: abre a página home.html 
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'home.html'))
})


app.use(routes)












export default app



