const adminModel = require('../../Model/adminModel')
const jwt = require('jsonwebtoken')
const adminData = async (req,res)=>{
    try {
        const {adminToken} = req.cookies

        if(!adminData)
        return res.status(404).send('there is no token here')

        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)
       
        if(!verify)
        return res.status(404).send('token is not autorized')

        const admin = await adminModel.findOne({_id:verify.adminId})
       
        if(!admin)
        return res.status(201).send("there is no admin here with this ")
       

        res.status(200).send(admin)
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = adminData