import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import MainHome from '../../Components/Home/MainHome'
import Footer from '../../Components/Footer/Footer'
import HomeSideBar2 from '../../Components/Home/HomeSideBar2'
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