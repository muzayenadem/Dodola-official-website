import React from 'react'
import SliderImage from './SliderImage'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'

function MainHome() {
  return (
    <section className='bg-white dark:bg-gray-900'>
     {/* <SliderImage/> */}
     <HomeTop/>
     <BlogHome/>
     <Feutures/>
     <QuestionHome/>
     <Subscribe/>
    </section>
  )
}

export default MainHome