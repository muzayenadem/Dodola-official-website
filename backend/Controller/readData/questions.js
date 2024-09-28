const questionModel = require('../../Model/questionModel')
const questions = async (req,res) =>{
    try {
        const question = await questionModel.find({})

        if(!question)
        return res.status(403).send('there is no data here')

        res.status(200).send(question)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = questions