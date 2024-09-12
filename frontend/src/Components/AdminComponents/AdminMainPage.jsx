import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminMainPage() {
  return (
    <div>
       <div className=" sticky top-0 left-0 z-50">
       <AdminNavbar/>
       </div>
        <div className="flex relative justify-start gap-5 bg-neutral-100 dark:bg-gray-600 dark:text-white" >
                <div className="flex fixed top-0 md:top-0 z-10 left-0">
                <AdminSidebar/>
                </div>
                <div className="container  mx-auto py-10 lg:px-20 ">
                    <Outlet/>
                </div>
            </div>
    </div>
  )
}

export default AdminMainPage