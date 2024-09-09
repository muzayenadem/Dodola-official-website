const useGoogle = async (req,res) =>{
    try {
        res.status(200).send('<a href="/auth/google" >Use Google to signup</a>')
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = useGoogle