const sendMail = require("./sendEmail")
const adminModel = require('../../Model/adminModel')
const jwt = require('jsonwebtoken')
const authorized =  async (req,res) =>{
    try {
        const user = req.user._json
        const {accessToken,refreshToken} = req.user 
        const isAdmin =  await adminModel.findOne({email:user.email})

        if(!isAdmin)
        return res.redirect('http://localhost:5173/page-not-found')
    
        console.log({user:req.user})
        console.log({accessToken,refreshToken})


        const token = jwt.sign({adminId:isAdmin._id},process.env.ADMINPASSWORD)
        res.cookie('adminToken', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        })
        console.log({token})
        res.redirect('https://dodola-official-website.vercel.app/admin');
        //sendMail(refreshToken,accessToken)
        // res.status(200).send(`
        //     <div>
        //       <h1>${user.given_name}</h1>
        //       <img src=${user.picture}  alt=""/>
        //     </div>
        //     `)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = authorized