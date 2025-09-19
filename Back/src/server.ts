import app from './app'
import { AppDataSource } from './data-source'

const PORT = process.env.PORT || 3000

AppDataSource.initialize() //faz conecção com o banco de dados
.then(() => {
    app.listen(PORT, () => {//fala qual porta tem q procurar e da um console.log
        console.log(`Servidor rodando na porta ${PORT}`)
    })
})
.catch(err => console.log("Error while connecting to database", err)) //se erro da console.log mostrando erro