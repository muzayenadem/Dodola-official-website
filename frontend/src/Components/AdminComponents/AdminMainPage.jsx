import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import HomeSideBar2 from '../AppComponents/Home/HomeSideBar2'

function AdminMainPage() {
  return (
    <div>
      <div className="flex relative justify-start  bg-neutral-100 dark:bg-gray-800 dark:text-white" >
        <div className="container  mx-auto py-10 lg:px-20 ">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminMainPage