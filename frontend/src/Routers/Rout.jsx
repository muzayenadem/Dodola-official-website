import React, { useEffect, useState } from 'react'
import {BrowserRouter as  Router,Route,Link, Routes, useParams } from 'react-router-dom'
import Home from '../Container/Home/Home'
import Admin from '../Container/Admin/Admin'
import NewPost from '../Components/AdminComponents/PostComponents/NewPost/NewPost'
import MainHome from '../Components/Home/MainHome'
import History from '../Components/About/History/History'
import Festival from '../Components/About/Festival/Festival'
import Themes from '../Components/About/Theme/Themes'
import Feutures from '../Components/About/Feutures/Feutures'
import Question from '../Components/About/Question/Question'
import Sport from '../Components/About/Sport/Sport'
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
            <Route path='question' element={<Question/>}/>
            <Route path='sport' element={<Sport/>}/>
            <Route path='login-admin' element={<LoginAdmin/>}/>
        </Route>
        <Route path='/page-not-found' element={<AdminPageNotFound/>}/>
        <Route path='/admin' element={
          adminToken.error !== 'succed' ? <></> :
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