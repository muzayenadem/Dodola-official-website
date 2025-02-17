const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
    required: true,
  },
  type: {
    type: String,
    enum: ['like', 'dislike'],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('LikeAndDislikeNews', reactionSchema);
