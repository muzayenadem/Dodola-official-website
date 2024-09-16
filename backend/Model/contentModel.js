const mongoose = require('mongoose')
const schema = mongoose.Schema({
    adminId:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    subCategory:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String,
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    postedDate: {
        required:true,
        type:String
    },
    images:{
        required:true,
        type:Array
    },
    postedDate:String,
})

const contentModel = mongoose.model('Contents',schema)

module.exports = contentModel