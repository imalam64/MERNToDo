const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    taskNum: Number,
    task: String,
    progress: String,
    difficulty: Number
});

const toDo = mongoose.model("To Do", toDoSchema);

module.exports = toDo