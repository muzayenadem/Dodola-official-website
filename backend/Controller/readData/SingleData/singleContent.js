const contentModel = require('../../Model/contentModel');
const singleContent = async (req, res) => {
    try {
        const {contentId} = req.params;
        const contents = await contentModel.findById({contentId});
        console.log({ contents });
        return res.status(200).send(contents);
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message }); // Optionally, send error response
    }
}

module.exports = singleContent;