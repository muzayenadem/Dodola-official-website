import React from 'react'
import { water } from '../../Images/images'

function NewsCard({data}) {
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
            return <div className='text-center py-32  dark:bg-gray-800'>there is no data </div>
          }
        const news = data.data
  return (
    <div className='dark:bg-gray-800 dark:text-white/80'>
        {news.map((data,i)=>{
            return (
                <div class="p-2 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img class="object-cover rounded-md w-full h-64" src={data.files[0]} alt="Article"/>
            
                <div class="p-6">
                    <div>
                        <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{data.category}</span>
                        <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{data.title}</a>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
                    </div>
            
                    <div class="mt-4">
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <img class="object-cover w-10 h-10 rounded-full" src={water} alt="Avatar"/>
                                <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{data.admin.fname} {data.admin.lname}</a>
                            </div>
                            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{data.eventDate}</span>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default NewsCard