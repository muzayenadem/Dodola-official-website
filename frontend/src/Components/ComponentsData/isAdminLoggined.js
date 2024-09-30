import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminTokenReducer } from '../../Controller/Tokens/adminToken' 

function isAdminLoggined() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(adminTokenReducer())
   },[])
  const adminToken = useSelector(state => state.adminToken)
  const admin = useSelector(state => state.adminToken.data)
  return {adminToken,admin}
}

export default isAdminLoggined