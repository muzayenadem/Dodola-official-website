import React from 'react'
import AdminMainPage from '../../Components/AdminComponents/AdminMainPage'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../Components/AdminComponents/AdminSidebar'
import AdminNavbar from '../../Components/AdminComponents/AdminNavbar'

function Admin() {
  return (
    <>
      <div className="sticky top-0 left-0 z-50">
          <AdminSidebar/>
      </div>
      <div className="sticky top-0 left-0 z-40 ">
          <AdminNavbar/>
      </div>
      <AdminMainPage/>
    </>
  )
}

export default Admin