require('../src/db/mongoose')
const User = require('../src/models/user')

// 6675d13c4c43e18db890f284

//  User.findByIdAndUpdate('6675d0d46f8edebaa26eec50', {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
//  }).then((result) => {
//     console.log(result)
//  }).catch((e) => {
//     console.log(e)
//  })

 const updateAgeAndCount = async(id, age) => {
   const user = await User.findByIdAndUpdate(id, {age})
   const count = await User.countDocuments({age})
   return count
 }

 updateAgeAndCount('6675d0d46f8edebaa26eec50', 2).then((count) => {
   console.log(count)
 }).catch((e) => {
   console.log(e)
 })