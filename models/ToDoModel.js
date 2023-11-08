const mongoose = require('mongoose')
mongoose.pluralize(null);

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo List', todoSchema)
