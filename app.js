import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { sequelize } from './db/db.js'
import './models/Models.js'
import RouterManagement from './routes/index.js'


const app = express()
const PORT = process.env.PORT || 8081
app.use(cors())
var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended:false}))
sequelize.sync({ force: true })
//Router
RouterManagement(app)

app.listen(PORT, () => {
  console.log('el server se encuentra en :', corsOptions.origin)
})

app.get('/', (req, res) => {
  res.send('Clean-Ops ApiRest-ES6')
})

/* const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')
const db = require("./db/db");

// require('./db/db')

const app = express()

const PORT = process.env.PORT || 8081

// app.use(cors())
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
db.sequelize.sync();
// db.sequelize.sync({ force: true })

require('./routes')(app)

app.get('/',(req,res)=>{
  res.send('CleanOps-API-REST')
})
app.listen(PORT,()=>{
  console.log('el server se encuentra en :',corsOptions.origin)
})
 */