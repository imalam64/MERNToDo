const express = require('express');
const router = express.Router();

//ToDo Model
const ToDo= require('../../models/toDo');

// @route   GET api/toDo
// @desc    GET all to dos
// @access  Public 
router.get('/', (req, res) => {
    ToDo.find()
    .sort({ taskNum: -1 })
    .then(toDo => res.json(toDo))
});

// @route   POST api/toDo
// @desc    create a new to dos
// @access  Public 
router.post('/', (req, res) => {
    const newToDo = new ToDo({
        //taskNum: req.body.taskNum,
        task: req.body.task,
        //progress: req.body.progress,
        //difficulty: req.body.difficulty
    })

    newToDo.save().then(toDo => res.json(toDo));
});

// @route   DELETE api/toDo/:id
// @desc    Delete a to do
// @access  Public 
router.delete('/:id', (req, res) => {
        ToDo.findById(req.params.id)
        .then(toDo => toDo.remove().then(() => res.json( {success: true } )))
        .catch(err => res.status(404).json( {success: false } ));
});

// @route   UPDATE api/toDo/:id
// @desc    Update a to do
// @access  Public 
router.put('/:id', (req, res) => {
        ToDo.findById(req.params.id)
        .then(toDo => toDo.set({ task: req.body.task }).then(() => res.json( {success: true } )))
        .catch(err => res.status(404).json( {success: false} ));
});


module.exports = router;