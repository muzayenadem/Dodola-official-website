const mongoose = require('mongoose')

const shema = mongoose.Schema({
    adminId:{
        required:true,
        type:String
    },
    fullName:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
    },
    phone:{
        required:true,
        type:String,
    },
    office:{
        type:String,
        required:true
    },
    category:{
        required:true,
        type:String,
    },
    images:Array,
    title:{
        required:true,
        type:String,
    },
    detail:{
        required:true,
        type:String,
    },
    date:{
        type:String
    },
    postedDate: {
        required:true,
        type:String
    },
     updatedDate:{
        type:String,
    },
    updatedBy:{
        type:Object
    }
})

const EmployeeModel = mongoose.model('Employee',shema)

module.exports = EmployeeModel