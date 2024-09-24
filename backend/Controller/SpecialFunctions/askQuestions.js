const assureEmail = require("../../Middleware/assureEmail")
const questionModel = require("../../Model/questionModel")

const askQuestions = async(req,res) =>{
    try {
        const {fullName,email,question} = req.body

        if(!assureEmail(email))
        return res.status(403).send('invalid email address')


        const ifAskedBefore = await questionModel.findOne({email})

        if(!ifAskedBefore){
            const newQuestion = new questionModel({
                fullName,
                email,
                question
            })
    
            const savedQuestion = await newQuestion.save()
    
            console.log({savedQuestion})

            return res.status(200).send('your question has been submeitted succesfully')
        }

        if(ifAskedBefore){
            ifAskedBefore.question.push(question)

            const saveQuestion = await ifAskedBefore.save()

            console.log({saveQuestion})

            return res.status(200).send('your question has been submeitted succesfully')
        }
       
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = askQuestions