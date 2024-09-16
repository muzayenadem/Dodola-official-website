import React, { useEffect, useState } from 'react'
import {BrowserRouter as  Router,Route,Link, Routes, useParams } from 'react-router-dom'
import Home from '../Container/Home/Home'
import Admin from '../Container/Admin/Admin'
import NewPost from '../Components/AdminComponents/PostComponents/NewPost/NewPost'
import MainHome from '../Components/AppComponents/Home/MainHome'
import History from '../Components/AppComponents/About/History/History'
import Festival from '../Components/AppComponents/About/Festival/Festival'
import Themes from '../Components/AppComponents/About/Theme/Themes'
import Feutures from '../Components/AppComponents/About/Feutures/Feutures'
import Question from '../Components/AppComponents/About/Question/Question'
import Sport from '../Components/AppComponents/About/Sport/Sport'
import MainPost from '../Components/AdminComponents/PostComponents/MainPost/MainPost'
import LoginAdmin from '../Components/AdminComponents/LoginAdmin/LoginAdmin'
import isAdminLoggined from '../Components/ComponentsData/isAdminLoggined'
import AdminPageNotFound from '../Components/PageNotFound/AdminPageNotFound'
import ManageContent from '../Components/AdminComponents/ManageContent/ManageContent'
import UpdateContent from '../Components/AdminComponents/UpdateComponents/UpdateContent/UpdateContent'
import ManageJobs from '../Components/AdminComponents/ManageJobs/ManageJobs'
import BidPost from '../Components/AdminComponents/PostComponents/BidPost/BidPost'
import JobPost from '../Components/AdminComponents/PostComponents/JobPost/JobPost'
import UpdateJob from '../Components/AdminComponents/UpdateComponents/UpdateJob/UpdateJob'
import Religion from '../Components/AppComponents/About/Religions/Religion'
import Agriculture from '../Components/AppComponents/Industry/Agriculture/Agriculture'
import IndustrialPark from '../Components/AppComponents/Industry/IndustrialPark/IndustrialPark'
import Manufacturing from '../Components/AppComponents/Industry/Manufacturing/Manufacturing'
import Marketing from '../Components/AppComponents/Industry/Marketing/Marketing'
import Elemantary from '../Components/AppComponents/Education/Elemantary/Elemantary'
import TechnicalClass from '../Components/AppComponents/Education/TechnicalClass/TechnicalClass'
import SecondarySchool from '../Components/AppComponents/Education/Secondary/SecondarySchool'
import Depeloma from '../Components/AppComponents/Education/Depeloma/Depeloma'
import Degree from '../Components/AppComponents/Education/Degree/Degree'
import Office from '../Components/AppComponents/Offices/Office'
import MainEvents from '../Components/AppComponents/News/Events/MainEvents'
import MainJob from '../Components/AppComponents/News/Job/MainJob'
import MainBidding from '../Components/AppComponents/News/Bidding/MainBidding'

function Rout() {
  const adminToken = isAdminLoggined()
  console.log({adminToken})
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='' element={<MainHome/>}/>
            <Route path='history' element={<History/>}/>
            <Route path='festival' element={<Festival/>}/>
            <Route path='theme' element={<Themes/>}/>
            <Route path='feutures' element={<Feutures/>}/>
            <Route path='religions' element={<Religion/>}/>
            <Route path='question' element={<Question/>}/>
            <Route path='sport' element={<Sport/>}/>
            {/* Industrial routes */}
            <Route path='agriculture' element={<Agriculture/>}/>
            <Route path='industrial-park' element={<IndustrialPark/>}/>
            <Route path='marketing' element={<Marketing/>}/>
            <Route path='manufacture' element={<Manufacturing/>}/>
            {/* Education Routes */}
            <Route path='elemantary' element={<Elemantary/>}/>
            <Route path='technical-class' element={<TechnicalClass/>}/>
            <Route path='secondary-school' element={<SecondarySchool/>}/>
            <Route path='college' element={<Depeloma/>}/>
            <Route path='degree' element={<Degree/>}/>
            {/* office educaion */}
            <Route path='office' element={<Office/>}/>


            {/* news routes */}

            <Route path='new-events' element={<MainEvents/>}/>
            <Route path='new-jobs' element={<MainJob/>}/>
            <Route path='new-bidding' element={<MainBidding/>}/>

            {/* login page admin */}
            <Route path='login-admin' element={<LoginAdmin/>}/>
            
        </Route>
        <Route path='/page-not-found' element={<AdminPageNotFound/>}/>
        <Route path='/admin' element={
          !adminToken.error  ? <></> :
          adminToken.token === true ? <Admin/> : <AdminPageNotFound/>}>
            <Route path='' element={<div>default page</div>}/>
            <Route path='blog-post' element={<NewPost/>}/>
            <Route path='bid-post' element={<BidPost/>}/>

            <Route path='jobs' element={<ManageJobs/>}/>
            <Route path='job-post' element={<JobPost/>}/>
            <Route path='update-job/:jobId' element={<UpdateJob/>}/>

            <Route path='content' element={<ManageContent/>}/>
            <Route path='main-post' element={<MainPost/>}/>
            <Route path='update-content/:contentId' element={<UpdateContent/>}/>
        </Route>
      </Routes>
   </Router>
  )
}

export default Rout