const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    additionalLink:{
        type:String
    },
    asAdmin:{
        type:String,
    },
    files:{
        type:Array,
    },
    eventDate:{
        type:String
    },
    postedDate:{
        type:String,
        required:true
    },
    admin:{
        required:true,
        type:Object
    }
})

const newsModel = mongoose.model('News',schema)

module.exports = newsModel