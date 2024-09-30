import React from 'react'
import { Link } from 'react-router-dom'
import AdminList from './AdminList'
import adminsData from '../../ComponentsData/adminsData'

function ManageAdmins() {
  const data = adminsData()
  console.log({data})
  return (
    <div>
        <AdminList/>
    </div>
  )
}

export default ManageAdmins