const jwt = require('jsonwebtoken')

const isLogginedWithEmail = async (req,res,next) =>{
   try {
        const adminToken = req.cookies.adminToken

        if(!adminToken)
        return res.status(404).send("there is no token which called admin")

        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)

        if(!verify)
        return res.status(404).send('token is not verified')

        req.admin = verify
        next()
   } catch (error) {
        console.log({error:error.message})
   }
}

module.exports = isLogginedWithEmail