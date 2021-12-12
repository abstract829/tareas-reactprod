const express = require ('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/tareas', require('./routes/tareas'))
app.use('/users', require('./routes/users'))

app.listen(process.env.PORT, console.log('Server iniciado en el puerto: ' + process.env.PORT))