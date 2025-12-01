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
    role:{
        type:Object,
        required:true
    },
    failedAttempts:{
        type:Number,
        default:0
    },
    lockUntil:{
        type:Date,
        default: null
    },
    profileImg:{
        type:String
    },
    coverImg:{
        type:String
    },
   
    date:{
        type:String
    }
})

const adminModel = mongoose.model('Admins',schema)

module.exports = adminModel