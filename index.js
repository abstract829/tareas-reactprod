const express = require ('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use( express.static('public') );
app.use(cors())
app.use(express.json())

app.use('/api/tareas', require('./routes/tareas'))
app.use('/api/users', require('./routes/users'))

app.get('*', (req,res) =>{
    res.sendFile( path.resolve(__dirname, 'public/index.html'))
})
app.listen(process.env.PORT, console.log('Server iniciado en el puerto: ' + process.env.PORT))