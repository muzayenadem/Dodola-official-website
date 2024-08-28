import React from 'react'
import SliderImage from './SliderImage'
import HomeTop from './HomeTop'
import BlogHome from './BlogHome'
import QuestionHome from './QuestionHome'
import Feutures from './Feutures'
import Subscribe from './Subscribe'
import Contact from './Contact'
import NewPost from '../AdminComponents/PostComponents/NewPost/NewPost'

function MainHome() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <NewPost/>
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