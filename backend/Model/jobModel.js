const mongoose = require('mongoose')

const schema = mongoose.Schema({
    adminId:{
        required:true,
        type:String
    },
    postedDate:String,
    job:Object,
    images:Array,
    company:Object,
    address:Object,
})

const JobModel = mongoose.model('Jobs',schema)
module.exports = JobModel