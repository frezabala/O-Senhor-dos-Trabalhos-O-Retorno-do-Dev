import app from './app'
import { AppDataSource } from './data-source'

const PORT = process.env.PORT || 3000

AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
})
.catch(err => console.log("Error while connecting to database", err))