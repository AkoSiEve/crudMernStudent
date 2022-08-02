const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})

const Student = mongoose.model('Student',studentSchema)

module.exports = Student