import React, { useEffect } from 'react'
import content from '../../ComponentsData/content'
import ListOfContent from './ContentPlace/ListOfContent'
import ContentTopButton from './ContentPlace/ContentTopButton'



function ManageContent() {

    useEffect(()=>{
        document.title= 'content management'
      })
   
    const data = content()

   
    const contents = data.data


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
    <div className='flex flex-col py-12 gap-5 min-h-[100vh]'> 
       <ContentTopButton/>
       <ListOfContent contents={contents} data={data}/>
     </div>
  )
}

export default ManageContent