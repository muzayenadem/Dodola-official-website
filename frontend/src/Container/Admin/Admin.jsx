import React from 'react'
import AdminMainPage from '../../Components/AdminComponents/AdminMainPage'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../Components/AdminComponents/AdminSidebar'
import AdminNavbar from '../../Components/AdminComponents/AdminNavbar'
import isAdminLoggined from '../../Components/ComponentsData/isAdminLoggined'

function Admin({admin}) {
   console.log({adminData:admin})
  return (
    <>
      <div className="sticky top-0 left-0 z-50">
          <AdminSidebar admin={admin}/>
      </div>
      <div className="sticky top-0 left-0 z-40 ">
          <AdminNavbar admin={admin}/>
      </div>
      <AdminMainPage/>
    </>
  )
}

export default Admin