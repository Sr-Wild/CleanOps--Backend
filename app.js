const express = require('express')
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
