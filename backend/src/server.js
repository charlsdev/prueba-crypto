const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const respTime = require('response-time')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors({
   origin: process.env.CLIENT_SERVER
}))
app.use(respTime())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('./routes/index.routes'))

module.exports = app