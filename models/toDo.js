const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    taskNum: {type: Number, required: true},
    task: {type: String, required: true},
    progress: {type: String, required: true},
    difficulty: {type: Number, required: true}
});

const toDo = mongoose.model("toDo", toDoSchema);

module.exports = toDo