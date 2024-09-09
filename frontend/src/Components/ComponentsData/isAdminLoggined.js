import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminTokenReducer } from '../../Controller/Tokens/adminToken' 

function isAdminLoggined() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(adminTokenReducer())
   },[])
  const adminToken = useSelector(state => state.adminToken)
  return adminToken
}

export default isAdminLoggined