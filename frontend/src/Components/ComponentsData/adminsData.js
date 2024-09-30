import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdmins } from '../../Controller/Data/adminsSlice'

function admins() {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchAdmins()) 
    },[])
    const admins = useSelector(state => state.admins)
  return admins
}

export default admins