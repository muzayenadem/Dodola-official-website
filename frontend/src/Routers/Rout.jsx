import React, { useEffect, useState } from 'react'
import {BrowserRouter as  Router,Route,Link, Routes, useParams } from 'react-router-dom'
import Home from '../Container/Home/Home'
import Admin from '../Container/Admin/Admin'
import NewPost from '../Components/AdminComponents/PostComponents/NewPost/NewPost'
import JobPost from '../Components/AdminComponents/PostComponents/JobPost/JobPost'
import BidPost from '../Components/AdminComponents/PostComponents/BidBost/BidPost'
import MainHome from '../Components/Home/MainHome'
import History from '../Components/About/History/History'
import Festival from '../Components/About/Festival/Festival'
import Themes from '../Components/About/Theme/Themes'
import Feutures from '../Components/About/Feutures/Feutures'
import Question from '../Components/About/Question/Question'
function Rout() {
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
        </Route>
        <Route path='/admin' element={<Admin/>}>
            <Route path='' element={<div>default page</div>}/>
            <Route path='blog-post' element={<NewPost/>}/>
            <Route path='job-post' element={<JobPost/>}/>
            <Route path='bid-post' element={<BidPost/>}/>
        </Route>
      </Routes>
   </Router>
  )
}

export default Rout