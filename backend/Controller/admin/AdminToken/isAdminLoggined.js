const jwt = require('jsonwebtoken')
const adminModel = require('../../../Model/adminModel')

const isAdminLoggined = async(req,res) =>{
    try {
        const adminToken = req.cookies.adminToken

        if(!adminToken)
            return res.status(403).send('Admin not loginned')
    
        const assure = jwt.verify(adminToken,process.env.ADMINPASSWORD)
    
        if(!assure)
            return res.status(402).send('not aouthorized')

        const admin = await adminModel.findOne({_id:assure.adminId})

        if(!admin)
        return res.status(403).send('There is no admin with this token')
    
        const token = true
        res.status(200).send({token,admin})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = isAdminLoggined 