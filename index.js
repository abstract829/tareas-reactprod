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
    res.sendFile( path.join(__dirname, 'public/index.html'), (err) => {
        if(err){
            res.status(500).send(__dirname)
        }
    })
})
app.listen(process.env.PORT, console.log('Server iniciado en el puerto: ' + process.env.PORT))