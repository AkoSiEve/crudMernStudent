const express = require('express')
const route = express.Router()


//api test
const studentController = require('../controller/Student.controller')

//get all student
route.get('/student',studentController.getAllStudent)

//add student
route.post('/student',studentController.addStudent)

//get student by id
route.get('/student/:id',studentController.getStudentById)

//delete student by id
route.delete('/student/:id',studentController.deleteStudentById)

//patch student by id
route.patch('/student/:id',studentController.patchStudentById)

module.exports = route