const express = require('express')
const bodyParser = require('body-parser')
const connectDb = require('./db')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')
const cors = require('cors')

const app = express()

// app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('Db connected')
        app.listen(3000, ()=> {
            console.log('server listening at port 3000....')
        })
    })
    .catch(err => console.log(err))