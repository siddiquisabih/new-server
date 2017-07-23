const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || '3000';
const Todo = require('./Model/TodoSchema')

mongoose.Promise = global.Promise

// mongoose.connect('mongodb://localhost/tododo')
mongoose.connect('mongodb://sabih:test123@ds119223.mlab.com:19223/testing')
app.use(bodyParser.json())




app.get('/api', (req, res, next) => {

        Todo.find({})
            .then(responce => res.send(responce))
            .catch(next)

        // res.send('saasd')
    })


app.post('/api/todo' , (req, res, next) => {

        const request = req.body;
        console.log(request)
        Todo.create(request)
            .then(responce => res.send(responce))
            .catch(next)
    })


app.use((err, req, res, next) => {
    res.send(err.message)
})



app.listen(port, function () {
    console.log("server is listening on port : ", port);
})