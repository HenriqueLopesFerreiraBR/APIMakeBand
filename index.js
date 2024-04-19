const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const database = require('./src/database/db')
dotenv.config()

//Rotas
const IndexRoutes = require('./src/routes/index');
//const userRouter= require('./src/routes/UserRoutes')

//Porta do Servidor
const port = process.env.PORT

// Habilita CORS para todas as origens (ajuste para produção)
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

//Conexão com banco de dados
database.test();


// app.use('/api/auth',authRoutes)
app.use('/api',IndexRoutes)




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))