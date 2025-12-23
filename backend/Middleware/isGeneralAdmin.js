const adminModel = require('../Model/adminModel')
const jwt = require('jsonwebtoken')
const isGeneralAdmin = async (req,res,next) => {
    try {
        const adminToken = req.cookies.adminToken

        if(!adminToken)
            return res.status(404).send('There is no admin with this id')

        const verify = jwt.verify(adminToken, process.env.ADMINPASSWORD)
        if(!verify)
            return res.status(404).send('token is not verified')

        const {adminId} = verify
        const adminData = await adminModel.find({_id:adminId})
        if(!adminData)
            return res.status(403).send('the use does not exist in database')

        const generalManager = adminData[0]?.role?.generalManager

        if(!generalManager)
            return res.status(402).send('you are not general manager')

        req.admin = {
            ...verify,
            generalManager
        }
        next()
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = isGeneralAdmin