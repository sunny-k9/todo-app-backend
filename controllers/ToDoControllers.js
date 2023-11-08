const { default: mongoose } = require('mongoose')
const ToDoModel = require('../models/ToDoModel')

module.exports.readTasks = async(req,res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.createTask = async (req,res) =>{
    const {text} = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Task Added...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateTask = async (req,res) =>{
    
const {_id,text} = req.body
ToDoModel
.findByIdAndUpdate(_id, {text})
.then(()=> {res.send("Updated Task...")})
.catch((err)=> {console.log(err)})

}

module.exports.deleteTask = async (req,res) =>{
    const _id = req.query.id
    console.log(`Delete ID: ${req.params.id}`)
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> {res.send("Deleted Task...")})
    .catch((err)=> {console.log(err)})
    
    }