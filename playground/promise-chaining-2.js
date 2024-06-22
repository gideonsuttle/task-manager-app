require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('667321a265e3223088076462').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6675f8054bd42ba2f72515d8').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})