const isLogginedWithGoogle = async(req,res,next) =>{
    try {
       // console.log(req.user)
        req.user ? next() : res.sendStatus(401)
    } catch (error) {
        console.log({error:error.message})
    }
} 
module.exports = isLogginedWithGoogle