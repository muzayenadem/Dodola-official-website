import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterEmployeeFromServer } from '../../Controller/Data/employeeSlice'


function filteredEmployeeData(value) {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(filterEmployeeFromServer(value)) 
    },[])
    const employee = useSelector(state => state.employee)
    return employee
}


export default filteredEmployeeData