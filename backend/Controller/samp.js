const data = async (req,res) =>{
    res.send(process.env.SERVICE_ACCOUNT_KEY)
}

module.exports = data