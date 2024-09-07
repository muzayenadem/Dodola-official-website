const adminModel = require('../../Model/adminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createAdmin = async (req,res) =>{
    try {
        const {fname,lname,email,phone,password, confirmPassword} = req.body

        if(!fname || !lname || !email || !phone || !password || !confirmPassword)
        return res.status(402).send('you must fill all required place')

        if(password !== confirmPassword)
        return res.status(403).send('your password must be matched')

        const admin = await adminModel.findOne({email})
        if(admin)
        return res.status(404).send('this email is exist as an admin')


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newAdmin = new adminModel({
            fname,lname,email,phone,password:hashedPassword
        })

        const savedAdmin = await newAdmin.save()

        const token = jwt.sign({renterId:savedAdmin._id},process.env.ADMINPASSWORD)
        res.cookie('adminToken', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).send('your account successfully created')

    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = createAdmin