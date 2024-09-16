import React, { useEffect } from 'react'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'
import Contact from './Contact'
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