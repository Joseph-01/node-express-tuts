const mongoose = require("mongoose")

//our schema to use in controllers
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

module.exports = mongoose.model("Task", TaskSchema)