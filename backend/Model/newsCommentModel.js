const mongoose = require('mongoose')

const schema = mongoose.Schema({
    newsId : { type: mongoose.Schema.Types.ObjectId, required: true },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    likes: { type: Number, default: 0 }, // Add likes
    dislikes: { type: Number, default: 0 }, // Add dislikes
    timestamp: { type: Date, default: Date.now },
})

const newsCommentModel = mongoose.model('NewsCommentModel',schema)

module.exports = newsCommentModel