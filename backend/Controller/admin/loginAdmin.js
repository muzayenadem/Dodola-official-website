const adminModel = require('../../Model/adminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assureEmail = require('../../Middleware/assureEmail')
const loginAdmin = async (req,res) =>{
    try {
        const {email,password} = req.body
        console.log({email,password})





         const json_super_admin = process.env.SUPER_ADMIN
        const super_admin = JSON.parse(json_super_admin)
        // const {fname,lname,em:email,phone,ps:password,roles} = super_admin
        const isSuperAdminBefore = await adminModel.findOne({email:super_admin.email})

        if(!isSuperAdminBefore){
            const dat = new Date()
            const date = `${dat.getFullYear()} / ${dat.getMonth()} / ${dat.getDate()}`
            console.log({date})

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(super_admin.password,salt)

            delete super_admin.password
            const newSuperAdmin = new adminModel({
                ...super_admin,password:hashedPassword,date
            })

            const savedSuperAdmin = await newSuperAdmin.save()
        }






        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill all required fields.' });
        }

        // Validate email format
        if (!assureEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address.' });
        }

        // Check if admin exists
        const isAdmin = await adminModel.findOne({ email });
        if (!isAdmin) {
            return res.status(403).json({ message: 'Incorrect email or password.' });
        }
        // check if user locked before
        if(isAdmin.lockUntil && isAdmin.lockUntil > Date.now()){
            console.log("locked before")
            return res.status(403).json({message: `Account locked try again after ${isAdmin.lockUntil.toLocaleString()}`})
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, isAdmin.password);
        if (!isPasswordValid) {
            isAdmin.failedAttempts += 1 
            console.log("invalid password")
            if(isAdmin.failedAttempts >= 5){
                console.log("not exxeed")
                isAdmin.lockUntil = Date.now() + 24 * 60 * 60 * 1000 ; // one day
                await isAdmin.save()
                return res.status(403).json({message:'Your Account Locked for 24 due too many failed attempts'}) 
            }

            await isAdmin.save()
            return res.status(403).json({ message: 'Incorrect email or password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ adminId: isAdmin._id }, process.env.ADMINPASSWORD, { expiresIn: '1d' });

        // reset  if if logginned
        isAdmin.failedAttempts = 0
        isAdmin.lockUntil = null
        await isAdmin.save()
        // Set the token in a secure, HTTP-only cookie
        res.cookie('adminToken', token, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).json({ message: 'Successfully logged in!' });

        console.log({ token });
        console.log("logginned succeed")
    } catch (error) {
        res.status(500).send('something is error')
        console.log({error:error.message})
    }
}

module.exports = loginAdmin