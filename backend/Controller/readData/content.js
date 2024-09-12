const contentModel = require('../../Model/contentModel');

const content = async (req, res) => {
    try {
        const contents = await contentModel.find({});
        console.log({ contents });
        return res.status(200).send(contents);
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message }); // Optionally, send error response
    }
}

module.exports = content;