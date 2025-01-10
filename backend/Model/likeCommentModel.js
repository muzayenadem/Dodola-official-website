const mongoose = require('mongoose')

const schema = mongoose.Schema({
    newsId : {
        required:true,
        newsId: { type: mongoose.Schema.Types.ObjectId, ref: 'News' },
    },
    like:{
        type:Number,
        required:true
    },
    timestamp: { type: Date, default: Date.now },
})

const likeCommentModel = mongoose.model('CommentsLike',schema)

module.exports = likeCommentModel