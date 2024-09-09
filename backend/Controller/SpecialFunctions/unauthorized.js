const unauthorized = async (req,res) =>{
    try {
        res.status(200).send('unauthorized')
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports =unauthorized