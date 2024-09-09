const adminModel = require('../../Model/adminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assureEmail = require('../../Middleware/assureEmail')
const loginAdmin = async (req,res) =>{
    try {
        const {email,password} = req.body

        if(!email || !password)
        return res.status(401).send('please fill all required place')


        if(!assureEmail(email))
        return res.status(402).send('invalid email address')

        const isAdmin = await adminModel.findOne({email})
        if(!isAdmin)
        return res.status(404).send('wrong email')
        
        const assurePassword = await bcrypt.compare(password, isAdmin.password)

        if(!assurePassword)
        return res.status(403).send('wrong password')

        const token = jwt.sign({adminId:isAdmin._id},process.env.ADMINPASSWORD)
        res.cookie('adminToken', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).send('successfully logined!')
        console.log({token})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = loginAdmin