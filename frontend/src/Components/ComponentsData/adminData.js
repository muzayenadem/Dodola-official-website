import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdminData } from '../../Controller/Data/adminData'

function adminData() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAdminData())
   },[])
  const admin = useSelector(state => state.adminData.data)
  const role = useSelector(state => state.adminData.role)
  return {admin,role}
}



export default adminData