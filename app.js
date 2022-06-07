import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { sequelize } from './db/db.js'
import RouterManagement from './routes/index.js'
import 'dotenv/config.js'
import './models/Models.js'

//middleware
const app = express()
app.use(cors())
var corsOptions = { origin: "http://localhost:" + process.env.PORT }
app.use(cors(corsOptions))
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
sequelize.sync({force:true})
//Router
RouterManagement(app)

app.listen(process.env.PORT, () => {
  console.log(' the server is hosted on:', corsOptions.origin)
})