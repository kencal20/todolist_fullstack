const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())


const db_name = 'mongodb://localhost/todolistNode'
const db = mongoose.connection

mongoose.connect(db_name)

db.on('error', (err) => console.error('Error Connecting to database', err))
db.once('open', () => console.log('Successfully Connected to database'))








app.listen(port, () => console.log(`Server is listeninhg from http://localhost:${port}`))