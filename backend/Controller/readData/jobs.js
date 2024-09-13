const JobModel = require("../../Model/jobModel");


const jobs = async (req, res) => {
    try {
        const job = await JobModel.find({});
        console.log({ job });
        return res.status(200).send(job);
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message }); // Optionally, send error response
    }
}

module.exports = jobs;