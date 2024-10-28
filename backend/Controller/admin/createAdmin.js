const adminModel = require('../../Model/adminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assureEmail = require('../../Middleware/assureEmail')


const createAdmin = async (req,res) =>{
    try {
        const {fname,lname,email,phone,password, confirmPassword,roles} = req.body
        const {adminId} = req.admin

        const mainAdmin = await adminModel.findOne({_id:adminId})
        const isGeneralManager = mainAdmin.role.generalManager
    
        if(!isGeneralManager)
        return res.status(201).send("the admin is doesn't have general manager role ")
 

        if(!fname || !lname || !email || !phone || !password || !confirmPassword)
        return res.status(402).send('you must fill all required place')

        if(!assureEmail(email))
        return res.status(403).send('invalid email address')

        if(password !== confirmPassword)
        return res.status(403).send('your password must be matched')

        const admin = await adminModel.findOne({email})
        if(admin)
        return res.status(404).send('this email is exist as an admin')

        const dat = new Date()
        const date = `${dat.getFullYear()} / ${dat.getMonth()} / ${dat.getDate()}`
        console.log({date})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newAdmin = new adminModel({
            fname,lname,email,phone,password:hashedPassword,role:roles,date
        })

        const savedAdmin = await newAdmin.save()

        res.status(200).send('New admin added succesfully')
        console.log({savedAdmin})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = createAdmin