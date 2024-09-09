const jwt = require('jsonwebtoken')
const contentModel = require('../../Model/contentModel')

const contentPost = async(req,res) =>{
    try {
        // take data from client
        let {data} = req.body
        data = JSON.parse(data)
        const files = req.files
        
        const adminToken = req.cookies.adminToken

        if(!adminToken)
        return res.status(404).send('not authorized')

        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)

        if(!verify)
        return res.status(403).send('not authenticated')

        const newContent = new contentModel({
            adminId:verify.adminId,
            ...data,
            images:files,

        })
        const savedContent = await newContent.save()
        console.log({verify})
        if(!data)
        return res.status(403).send('there is no data')

        res.status(200).send(savedContent)
        console.log({savedContent})
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}

module.exports = contentPost