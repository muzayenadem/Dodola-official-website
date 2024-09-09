const authorizedAdmin = async (req,res) =>{
    try {
        res.status('authorized')
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = authorizedAdmin