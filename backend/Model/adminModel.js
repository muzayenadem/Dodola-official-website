const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fname:{
        required:true,
        type:String
    },
    lname:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number,
    },
    password:{
        required:true,
        type:String
    },
})

const adminModel = mongoose.model('Admins',schema)

module.exports = adminModel