const studentModel = require('../model/Student.model')

//get all student
const getAllStudent = async (req,res) => {
    //GET
    try{
        const student = await studentModel.find({})
        res.status(200).json({
            student:student
        })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

//add student
const addStudent = async (req,res) =>{
    //POST
    
    try{
        const fname = req.body.firstname
        const lname = req.body.lastname
        const age = req.body.age
        const student = new studentModel({
            firstname:fname,
            lastname:lname,
            age:age
        })

        await student.save()

        res.status(201).json({
            message:"successfly added"
        })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }

}

//get student by id
const getStudentById = async (req,res) =>{
    try{
        const _id = req.params.id
        const student = await studentModel.findById({
            _id:_id
        })

        res.status(200).json({
            student:student
        })

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

//delete student by id
const deleteStudentById = async (req,res) => {

    try{
        const _id = req.params.id
        const student = await studentModel.findOneAndDelete({
            _id:_id
        })
        res.status(204).json({
            message:"succefully deleted"
        })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

//patch student by id
const patchStudentById = async (req,res) => {
    try{
    
    const _id = req.params.id
    const fname = req.body.firstname
    const lname = req.body.lastname
    const age = req.body.age
    
    const student = await studentModel.findOneAndUpdate({
        _id:_id
    },{
        firstname:fname,
        lastname:lname,
        age:age
    },{new:true})
    
    res.status(200).json({
        message:"succesfully update"
    })

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

module.exports = {
    getAllStudent,
    addStudent,
    getStudentById,
    deleteStudentById,
    patchStudentById
}