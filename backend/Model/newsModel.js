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
        type:Boolean,
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
    updatedDate:{
        type:String,
    },
    admin:{
        required:true,
        type:Object
    },
    updatedBy:{
        type:Object
    }
})

const newsModel = mongoose.model('News',schema)

module.exports = newsModel