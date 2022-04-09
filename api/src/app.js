require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')

const server = express()

const allowCors = process.env.CORS || 'http://localhost:3001'

server.name = 'ssaavedraa'

server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', allowCors)
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})
server.use(cors())
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/', routes)

server.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
})

module.exports = server