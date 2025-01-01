const newsCommentModel = require('../../../Model/newsCommentModel');

const setNewsComment = async (req, res) => {
    try {
        const { newsId, name, comment } = req.body;

        // Validate required fields
        if (!newsId || !name || !comment) {
            return res.status(400).json({ error: 'All fields (newsId, name, comment) are required.' });
        }

        console.log({ comment });

        // Create a new comment
        const newComment = new newsCommentModel({
            newsId,
            name,
            comment,
            //timestamp: { type: Date, default: Date.now }, // Optional if your schema doesn't handle timestamps
        });

        // Save the comment to the database
        const savedComment = await newComment.save();

        // Emit the new comment to all connected clients
        req.io.emit('new-comment', savedComment);     
            // Respond with success
        console.log('Comment successfully saved:', savedComment);
        return res.status(201).json({
            message: 'Comment successfully posted.',
            comment: savedComment,
        });

    } catch (error) {
        console.error('Error while saving comment:', error.message);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

module.exports = setNewsComment;
