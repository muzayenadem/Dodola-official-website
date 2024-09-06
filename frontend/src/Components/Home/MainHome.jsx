import React, { useEffect } from 'react'
import SliderImage from './SliderImage'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'
import Contact from './Contact'
import NewPost from '../AdminComponents/PostComponents/NewPost/NewPost'
import HomeSidebar from './HomeSidebar'
import HomeSideBar2 from './HomeSideBar2'
import SlideImage from './SlideImage'

function MainHome() {
  useEffect(()=>{
    document.title= 'dodola official website'
  })
  return (
    <section className='bg-white dark:bg-gray-900'>
      <SlideImage/>
     <HomeTop/>
     <BlogHome/>
     <Feutures/>
     <QuestionHome/>
     <Contact/>
     <Subscribe/>
    </section>
  )
}

export default MainHome