
const mongoose = require('mongoose');

const newsCommentSchema = new mongoose.Schema({
    newsId: { type: mongoose.Schema.Types.ObjectId, ref: 'News' },
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
});

module.exports = mongoose.model('NewsComment', newsCommentSchema);
