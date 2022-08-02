const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000
const cors = require('cors')

//middleware
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//database fire up
const dbURL = 'mongodb://localhost:27017/studentCrud'
mongoose.connect(dbURL)
.then((e)=>{
    console.log('database connected...')
})
.catch((err)=>{
    console.log(err.message)
})


//server fire up
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}....`)
})

const student = require('./route/Student.route')
app.use('/api',student)