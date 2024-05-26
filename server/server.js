const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000


const db_name = 'mongodb://localhost/todolistNode'
const db = mongoose.connection

mongoose.connect(db_name)

db.on('error', (err) => console.error('Error Connecting to database', err))
db.once('open', () => console.log('Successfully Connected to database'))








app.listen(port, () => console.log(`Server is listeninhg from http://localhost:${port}`))