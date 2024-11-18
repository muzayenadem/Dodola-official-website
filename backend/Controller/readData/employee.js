const employeeModel = require('../../Model/EmployeeModel')

const employee = async (req,res) =>{
    try {
        const employees = await employeeModel.find({})

        if(!employees)
            return res.status(403).send('there is no employee here')

        res.status(200).send(employees)
    } catch (error) {
        res.status(500).send('there is wrong at server')
        console.log({error:error.message})
    }
}

module.exports = employee