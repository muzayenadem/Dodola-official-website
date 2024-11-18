const employeeModel = require('../../Model/EmployeeModel')
const deleteEmployee = async(req,res) =>{
    try {
        const {id} = req.body

        const isThereEmployee = await employeeModel.findById({_id:id})

        if(!isThereEmployee)
        return res.status(402).send('there is no job with this id')

        const deletedEmployee = await employeeModel.deleteOne({_id:id})
        
        if(!deletedEmployee)
        return res.status(404).send('the job t is not deleted')

        res.status(200).send('content succefully deleted')
    } catch (error) {
     console.log({error:error.message})   
    }
}

module.exports = deleteEmployee