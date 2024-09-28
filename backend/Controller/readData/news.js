const newsModel = require('../../Model/newsModel');

const news = async (req, res) => {
    try {
        const news = await newsModel.find({});
        console.log({ news });
        return res.status(200).send(news);
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message }); // Optionally, send error response
    }
}

module.exports = news;