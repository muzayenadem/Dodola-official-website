import React from 'react'
import SliderImage from './SliderImage'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'
import Contact from './Contact'

function MainHome() {
  return (
    <section className='bg-white dark:bg-gray-900'>
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