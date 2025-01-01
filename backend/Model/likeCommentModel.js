const mongoose = require('mongoose')

const schema = mongoose.Schema({
    newsId : {
        required:true,
        type:String
    },
    like:{
        type:Number,
        required:true
    },
    timestamp: { type: Date, default: Date.now },
})

const likeCommentModel = mongoose.model('NewsCommentModel',schema)

module.exports = likeCommentModel