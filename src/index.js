const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.post('/', (req, res) => {
    res.send('Welcome to the task manager application!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port )
})

// MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api