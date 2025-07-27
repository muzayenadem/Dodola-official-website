import React from 'react'
import newsData from '../../../ComponentsData/newsData'
import ButtonsOfNews from './ButtonsOfNews'
import NewsCard from './NewsCard'
import LatestNews from './LatestNews'
import { water, water2 } from '../../Images/images'
import ScrollToTop from '../../Home/ScrollTop'



function MainEvents() {
    const data = newsData()

    const news = data.data

    const latest = news.length > 0 && news.slice(-3)

 ScrollToTop()
 
   if(data.loading){
     return (
       <div className="flex items-center  justify-center px-32 py-60 dark:bg-gray-900  md:p-32 md:py-60 min-h-[65vh] space-x-2">
       <div className="w-4 h-4 rounded-full animate-spin px-5 bg-violet-800"></div>
       <div className="w-3.5 h-3.5 rounded-full animate-spin px-4 bg-violet-700"></div>
       <div className="w-3 h-3 rounded-full animate-spin px-3 bg-violet-600"></div>
       <div className="w-2 h-2 rounded-full animate-spin px-2 bg-violet-500"></div>
       <div className="w-1.5 h-1.5 rounded-full px-2 animate-spin bg-violet-400"></div>
     </div>
     )
   }
   if(data.error){
     return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>{data.error}</div>
   
   }
 
 
  return (
    <section className='bg-neutral-100 md:py-5 dark:bg-gray-900'>
           <div className="lg:container py-0 lg:mx-auto md:px-2 min-h-[60vh] ">
           <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
              <div className=" col-span-4  2xl:col-span-3 bg-neutral-100  dark:bg-gray-900 h-auto max-h-[56vh]  md:sticky top-14  md:top-16"><ButtonsOfNews latest={latest}/></div>
              <div className={`md:col-span-8 2xl:col-span-6  bg-white dark:bg-gray-800 ${news.length ? '' : 'min-h-[100vh]'} `}><NewsCard data={data}/></div>
              <div className={`hidden 2xl:block  2xl:col-span-3 bg-neutral-100 dark:bg-gray-900 h-auto ${news.length ? ' max-h-[64vh]' : 'max-h-[24vh]'} sticky top-16`}><LatestNews latest={latest}/></div>
           </div>
        </div>

    </section>
  )
}



export default MainEvents