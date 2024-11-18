import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployee } from '../../Controller/Data/employeeSlice'


function employeeData() {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchEmployee()) 
    },[])
    const employee = useSelector(state => state.employee)
  return employee
}

export default employeeData