const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://sandeep:1234@cluster0.ai0p8v9.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        // { 
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
        )
}