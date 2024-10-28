const adminModel = require('../../Model/adminModel')
const admins = async(req,res) =>{
    try {
        const {adminId} = req.admin

        const mainAdmin = await adminModel.findOne({_id:adminId})
        const isGeneralManager = mainAdmin.role.generalManager
    
        if(!isGeneralManager)
        return res.status(201).send("the admin is doesn't have general manager role ")

        const admin = await adminModel.find({})

        if(!admin)
        return res.status(402).send('there is no admins')

        res.status(200).send(admin)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = admins