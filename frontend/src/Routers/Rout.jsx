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
import NewQuestions from '../Components/AdminComponents/Questions/NewQuestions'
import ManageNews from '../Components/AdminComponents/ManageNews/ManageNews'
import Hospitals from '../Components/AppComponents/Services/Hospitals/Hospitals'
import Hotels from '../Components/AppComponents/Services/Hotels/Hotels'
import Others from '../Components/AppComponents/Services/Others/Others'
import Resourts from '../Components/AppComponents/Services/Resourts/Resourts'
import ManageAdmins from '../Components/AdminComponents/ManageAdmins/ManageAdmins'
import AddAdmin from '../Components/AdminComponents/ManageAdmins/AddAdmin/AddAdmin'

function Rout() {
  const {adminToken ,admin}= isAdminLoggined()
 
  console.log({adminToken})
  console.log({admin})
  
  // const list = ()=>{
  //   let adminsRole = {}
  //   for (let admins of admin){
  //     adminsRole = admins.role && admins.role
  //   }
  //   return adminsRole
  // }
  // const {generalManager,contentManager,jobsManager,eventManager,responseManager,biddingManager} = list()
  //  console.log({generalManager}) 
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
            {/*services routes*/}
            <Route path='hospitals' element={<Hospitals/>}/>
            <Route path='hotels' element={<Hotels/>}/>
            <Route path='others' element={<Others/>}/>
            <Route path='resourts' element={<Resourts/>}/>

            {/* office educaion */}
            <Route path='mayor-office' element={<Office/>}/>


            {/* news routes */}

            <Route path='new-events' element={<MainEvents/>}/>
            <Route path='new-jobs' element={<MainJob/>}/>
            <Route path='new-bidding' element={<MainBidding/>}/>

            {/* login page admin */}
            <Route path='login-admin' element={<LoginAdmin/>}/>

        </Route>
        <Route path='/page-not-found' element={<AdminPageNotFound/>}/>
        <Route path='/admin' element={<Admin/>}>
            <Route path='' element={<div>default page</div>}/>
            <Route path='admins' element={<ManageAdmins/>}/>
            <Route path='add-admin' element={<AddAdmin/>}/>

            {/* <Route path='news' element={generalManager || eventManager ? <ManageNews/>:<div>Not general or event manager</div>}/>
            <Route path='news-post' element={<NewPost/>}/>


            <Route path='bid-post' element={generalManager || biddingManager ? <BidPost/>:<div>Not general or bidding manager</div>}/>
            <Route path='questions' element={generalManager || responseManager ? <NewQuestions/>:<div>Not general or response manager</div>}/>

            <Route path='jobs' element={generalManager || jobsManager ? <ManageJobs/>:<div>Not general or jobs manager</div>}/>
            <Route path='job-post' element={<JobPost/>}/>
            <Route path='update-job/:jobId' element={<UpdateJob/>}/>

            <Route path='content' element={generalManager || contentManager ? <ManageContent/>:<div>Not general or content manager</div>}/>
            <Route path='main-post' element={<MainPost/>}/>
            <Route path='update-content/:contentId' element={<UpdateContent/>}/> */}
        </Route>
      </Routes>
   </Router>
  )
}

export default Rout