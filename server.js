const mongoose = require('mongoose');
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { User } = require('./models/user.js');
const { Todo } = require('./models/todo.js');

const app = express();

app.use(bodyParser.json());

const newUser = new User( {
    email: '',
});

app.post('/', (req, res) => {
    newUser.save().then((resp) => {
        console.log('Saved : \n' + JSON.stringify(resp, undefined, 2));
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000')
})

