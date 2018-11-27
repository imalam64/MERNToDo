const express = require('express');
const routes = express.Router();

const db = require('../models/toDo');

// Route for getting all to-Dos from the db
routes.get('/', (req, res)=> {
    db.toDo.find({}, (error, data) =>{
        if (error) {
            res.sendStatus(404);
        } else {
            console.log(data);
        }
    })
})