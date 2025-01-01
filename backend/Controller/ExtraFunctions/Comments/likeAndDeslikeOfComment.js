const newsCommentModel = require('../../../Model/newsCommentModel');

// Like a comment
exports.likeComment = async (req, res) => {
  try {
    const {commentId} = req.params
    console.log({commentId})
    const comment = await newsCommentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.likes += 1; // Increment likes
    await comment.save();

    // Emit the updated comment to all clients
    req.io.emit('update-comment-like', comment);

    res.status(200).json({ success: true, comment });
  } catch (err) {
    console.log({error:err.message})
    res.status(500).json({ error: 'Failed to like comment' });
  }
};

// Dislike a comment
exports.dislikeComment = async (req, res) => {
  try {
    const {commentId} = req.params
    console.log({commentId})
    const comment = await newsCommentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.dislikes += 1; // Increment dislikes
    await comment.save();

    // Emit the updated comment to all clients
    req.io.emit('update-comment-dislike', comment);

    res.status(200).json({ success: true, comment });
  } catch (err) {
    console.log({error:err.message})
    res.status(500).json({ error: 'Failed to dislike comment' });
  }
};
