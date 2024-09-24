const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    question:{
        type:Array(),
    },
})

const questionModel = mongoose.model('Questions',schema)

module.exports = questionModel