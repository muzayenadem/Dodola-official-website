import React, { useEffect } from 'react'
import content from '../../../ComponentsData/content'

import { useDispatch } from 'react-redux'
import { filterContentFromServer } from '../../../../Controller/Data/contentSlice'
import filteredContentData from '../../../ComponentsData/filteredContentData'
import TopAbout from '../TopAbout/TopAbout'
import ReligionCard from './ReligionCard'


function Religion() {


   const data = filteredContentData('Religion')



   const religion = data.data

   if(data.filterLoading){
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

  if(!data.data.length & data.filterLoading == false){
    return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>there is no data </div>
  }
  return (
    <section className='dark:bg-gray-900 py-5 lg:px-6'>
     <div className="px-5">
     <TopAbout 
        title={'Religions in dodola city'} 
        description={'there are many religions in dodola city'}

      />
     </div>
        <div className=" container py-10 mx-auto ">
          <ReligionCard religons={religion}/>
        </div>
    </section>
  )
}

export default Religion