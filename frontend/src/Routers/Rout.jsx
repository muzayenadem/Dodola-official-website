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
import AdminPageNotFound from '../Components/ErrorPages/AdminPageNotFound'
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
import NotGeneralAdmin from '../Components/ErrorPages/NotGeneralAdmin'
import EditProfile from '../Components/AdminComponents/Admin/AdminProfile/EditProfile'
import Banks from '../Components/AppComponents/Services/Banks/Banks'
import RentalHouse from '../Components/AppComponents/Services/RentalHouses/RentalHouse'
import ManageEmployee from '../Components/AdminComponents/ManageEmployee/ManageEmployee'
import EmployeePost from '../Components/AdminComponents/PostComponents/EmployeePost/EmployeePost'
import DetailNews from '../Components/AppComponents/News/DetailNews/DetailNews'
import ContentDetail from '../Components/AppComponents/ContentDetail/ContentDetail'
import ScrollToTop from '../Components/AppComponents/Home/ScrollTop'
import NoData from '../Components/ErrorPages/NoData'
import UpdateNews from '../Components/AdminComponents/UpdateComponents/UpdateNews'

function Rout() {
  const {adminToken ,admin}= isAdminLoggined()
 
  console.log({adminToken})
  console.log({admin})
  const {newsId} = useParams()
  const list = ()=>{
    let adminsRole = {}
    for (let admins of admin){
      adminsRole = admins.role && admins.role
    }
    return adminsRole
  }
  const {generalManager,contentManager,jobsManager,eventManager,responseManager,biddingManager} = list()
   console.log({generalManager}) 

   const [real,setReal] = useState('')
   useEffect(()=>{

   const currentPage = window.location.href
   console.log({currentPage})
   
   const split = currentPage.split('/')
   console.log({split:split[split.length-1]})
   const rea = split[split.length-1].replace('%20', ' ')
   setReal(rea)
   console.log({real})
   },[])
 
  return (
   <Router>
    <ScrollToTop/>
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
            <Route path='banks' element={<Banks/>}/>
            <Route path='others' element={<Others/>}/>
            <Route path='rentalHouse' element={<RentalHouse/>}/>
            <Route path='resourts' element={<Resourts/>}/>

            {/* office educaion */}
            <Route path='/:officeId' element={<Office/>}/>


            {/* news routes */}

            <Route path='new-events' element={<MainEvents/>}/>
            <Route path='new-jobs' element={<MainJob/>}/>
            <Route path='new-bidding' element={<MainBidding/>}/>

            {/*  detail routes */}
            <Route path='news-detail/:newsId' element={<DetailNews key={newsId}/>}/>
            <Route path='content-detail/:contentId' element={<ContentDetail/>}/>

            {/* login page admin */}
            <Route path='login-admin' element={<LoginAdmin/>}/>
        </Route>


        <Route path='/no-data' element={<NoData/>}/>
        
        <Route path='/admin' element={
          adminToken.loading ?     <div className="flex items-center  justify-center px-32 py-60 dark:bg-gray-900  md:p-32 md:py-60 min-h-[65vh] space-x-2">
          <div className="w-4 h-4 rounded-full animate-spin px-5 bg-violet-800"></div>
          <div className="w-3.5 h-3.5 rounded-full animate-spin px-4 bg-violet-700"></div>
          <div className="w-3 h-3 rounded-full animate-spin px-3 bg-violet-600"></div>
          <div className="w-2 h-2 rounded-full animate-spin px-2 bg-violet-500"></div>
          <div className="w-1.5 h-1.5 rounded-full px-2 animate-spin bg-violet-400"></div>
        </div>:
          !adminToken.error  ? <></> :
          adminToken.token === true ? <Admin admin={admin}/> : <AdminPageNotFound/>}>
            <Route path='' element={<div>default page</div>}/>
            {/* <Route path='admins' element={<ManageAdmins/>}/>
            <Route path='add-admin'  element={<AddAdmin/>}/>
            <Route path='news' element={<ManageNews/>}/>
            <Route path='news-post' element={<NewPost/>}/>
            <Route path='jobs' element={<ManageJobs/>}/>
            <Route path='job-post' element={<JobPost/>}/>
            <Route path='content' element={<ManageContent/>}/>
            <Route path='main-post' element={<MainPost/>}/> */}

            <Route path='edit-profile' element={<EditProfile/>}/>
            <Route path='admins' element={generalManager ? <ManageAdmins/>:
              <NotGeneralAdmin
                title={'You are not general manager'}
                description={"in this software you can't  access this page if you are not general manager"}
              />
            }/>

            <Route path='employees' element={generalManager ? <ManageEmployee/>:
              <NotGeneralAdmin
                title={'You are not general manager'}
                description={"in this software you can't  access this page if you are not general manager"}
              />
            }/>

            <Route path='add-employees' element={generalManager ? <EmployeePost/>:
              <NotGeneralAdmin
                title={'You are not general manager'}
                description={"in this software you can't  access this page if you are not general manager"}
              />
            }/>

            <Route path='add-admin'  element={generalManager ? <AddAdmin/>:
              <NotGeneralAdmin
              title={'You are not general manager'}
              description={"in this software you can't  access this page if you are not general manager"}
              />
            }/>
            <Route path='news' element={generalManager || eventManager ? <ManageNews/>:
              <NotGeneralAdmin
              title={'You are not general or event manager '}
              description={"in this software you can't  access this page if you are not general manager or event"}
              />
            }/>
            <Route path='news-post' element={generalManager || eventManager ? <NewPost/>:
                 <NotGeneralAdmin
                 title={'You are not general or event manager '}
                 description={"in this software you can't  access this page if you are not general manager or event manager"}
                 />
            }/>
            <Route path='bid-post' element={generalManager || biddingManager ? <BidPost/>:
                 <NotGeneralAdmin
                 title={'You are not general or bidding manager '}
                 description={"in this software you can't  access this page if you are not general manager or bidding manager"}
                 />
            }/>
            <Route path='questions' element={generalManager || responseManager ? <NewQuestions/>:
                 <NotGeneralAdmin
                 title={'You are not general or response manager '}
                 description={"in this software you can't  access this page if you are not general manager or response manager"}
                 />
            }/>
            <Route path='jobs' element={generalManager || jobsManager ? <ManageJobs/>:
              <NotGeneralAdmin
              title={'You are not general or jobs manager'}
              description={"in this software you can't  access this page if you are not general manager or jobs manager"}
              />
            }/>
            <Route path='job-post' element={generalManager || jobsManager ? <JobPost/>:
              <NotGeneralAdmin
              title={'You are not general or jobs manager'}
              description={"in this software you can't  access this page if you are not general manager or jobs manager"}
              />
            }/>
            <Route path='update-job/:jobId'  element={generalManager || jobsManager ? <UpdateJob/>:
              <NotGeneralAdmin
              title={'You are not general or jobs manager'}
              description={"in this software you can't  access this page if you are not general manager or jobs manager"}
              />
            }/>

            <Route path='content' element={generalManager || contentManager ? <ManageContent/>:
              <NotGeneralAdmin
              title={'You are not general or content manager'}
              description={"in this software you can't  access this page if you are not general manager or content manager"}
              />
            }/>
            <Route path='main-post' element={generalManager || contentManager ? <MainPost/>:
               <NotGeneralAdmin
               title={'You are not general or content manager'}
               description={"in this software you can't  access this page if you are not general manager or content manager"}
               />
            }/>
            {/* Updates Route */}
            <Route path='update-content/:contentId' element={generalManager || contentManager ? <UpdateContent/>:
               <NotGeneralAdmin
               title={'You are not general or content manager'}
               description={"in this software you can't  access this page if you are not general manager or content manager"}
               />
            }/>
              <Route path='update-news/:newsId' element={generalManager || eventManager ? <UpdateNews/>:
               <NotGeneralAdmin
               title={'You are not general or event manager'}
               description={"in this software you can't  access this page if you are not general manager or content manager"}
               />
            }/>
        </Route>
      </Routes>
   </Router>
  )
}

export default Rout