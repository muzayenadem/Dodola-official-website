const adminModel = require('../../Model/adminModel')
const jwt = require('jsonwebtoken')
const admins = async(req,res) =>{
    try {
        const adminToken = req.cookies.adminToken
      
        if(!adminToken)
        return res.status(404).send('there is no token')

        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)
       
        if(!verify)
        return res.status(404).send('token is not autorized')

        const mainAdmin = await adminModel.findOne({_id:verify.adminId})
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