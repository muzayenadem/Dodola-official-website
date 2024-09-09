const mongoose = require('mongoose')
const schema = mongoose.Schema({
    adminId:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String,
    },
    category:{
        required:true,
        type:String
    },
    subCategory:{
        required:true,
        type:String
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
    }
})

const contentModel = mongoose.model('Contetns',schema)

module.exports = contentModel