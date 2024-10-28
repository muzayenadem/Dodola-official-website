const adminModel = require('../../Model/adminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assureEmail = require('../../Middleware/assureEmail')
const loginAdmin = async (req,res) =>{
    try {
        const {email,password} = req.body
        console.log({email,password})

        if(!assureEmail(email))
            return res.status(400).json({ message: 'Invalid email address.' });

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

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, isAdmin.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: 'Incorrect email or password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ adminId: isAdmin._id }, process.env.ADMINPASSWORD, { expiresIn: '1d' });

        // Set the token in a secure, HTTP-only cookie
        res.cookie('adminToken', token, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).json({ message: 'Successfully logged in!' });

        console.log({ token });
    } catch (error) {
        res.status(500).send('something is error')
        console.log({error:error.message})
    }
}

module.exports = loginAdmin