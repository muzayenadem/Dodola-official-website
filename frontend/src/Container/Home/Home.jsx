import React from 'react'
import Navbar from '../../Components/AppComponents/Navbar/Navbar'
import MainHome from '../../Components/AppComponents/Home/MainHome'
import Footer from '../../Components/AppComponents/Footer/Footer'
import HomeSideBar2 from '../../Components/AppComponents/Home/HomeSideBar2'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="sticky top-0 left-0 z-50">
      {/* <HomeSidebar/> */}
      <HomeSideBar2/>
      </div>
    <div className="sticky top-0 left-0 z-40">
    <Navbar/>
    </div>
      <Outlet/>
      {/* <MainHome/> */}
      <Footer/>
    </>
  )
}

export default Home