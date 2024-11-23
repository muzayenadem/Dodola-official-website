import React, { useEffect } from 'react'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'
import Contact from './Contact'
import SlideImage from './SlideImage'
import VMG from './VMG'
import Vission from './Vission'
import Latest from './Latest'
import LatestContent from './LatestContent'
import MayorCrd from './MayorCrd'
import Gallery from './Gallery'

function MainHome() {
  useEffect(()=>{
    document.title= 'dodola official website'
  })
  return (
    <section className='bg-white dark:bg-gray-900'>
        <VMG/>
        <Vission/>
        <MayorCrd/>
        <Latest/>
        <LatestContent/>
        <Gallery/>
        <SlideImage/>
        <Feutures/>
        <QuestionHome/>
        <Contact/>
        <Subscribe/>
     
  
    </section>
  )
}

export default MainHome