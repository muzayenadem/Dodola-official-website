const jwt = require('jsonwebtoken')

const isAdminLoggined = async(req,res) =>{
    try {
        const adminToken = req.cookies.adminToken

        if(!adminToken)
            return res.status(402).send(false)
    
        const assure = jwt.verify(adminToken,process.env.ADMINPASSWORD)
    
        if(!assure)
            return res.status(403).send(false)
    
        res.status(200).send(true)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = isAdminLoggined 