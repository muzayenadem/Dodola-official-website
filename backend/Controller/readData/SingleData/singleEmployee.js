const EmployeeModel = require('../../../Model/EmployeeModel')

const singleEmployee = async(req,res) =>{
    try {
        const {employeeId} = req.params
        const employee = await EmployeeModel.find({_id:employeeId})

        if(!employee)
            return res.status(403).send("there is no job with this Id")

        return res.status(200).send(employee)
    } catch (error) {
        console.log({error:error.message})
        res.status(500).send("something wrong with server")
    }
}
module.exports = singleEmployee