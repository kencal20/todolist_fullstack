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

const listSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
})

const List = new mongoose.model('todoList', listSchema)

app.get('/', async (req, res) => {
    const list = await List.find()
    res.send({ message: 'This is the Total List', list })
})

app.post('/', async (req, res) => {
    const { name, description, date, time } = req.body
    const item = new List({
        name, description, date, time
    })
    const newItem = await item.save()
    res.json({ message: 'New Item has been  created ', newItem })
})

app.put('/:id',  (req, res) => {

})

app.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedItem = await List.findByIdAndDelete(id);
    if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item has been deleted', deletedItem });
})

app.listen(port, () => console.log(`Server is listeninhg from http://localhost:${port}`))