import React from 'react'
import filteredContentData from '../../ComponentsData/filteredContentData'

function LatestContent() {

  const data = filteredContentData('')



  const content = data.data

  const latesFestival = content.length > 0 && content.slice(-1)

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
    <section class="bg-white dark:bg-gray-900 px-4 py-10 mx-auto lg:max-w-screen-2xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent content </h1>

            <button class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
        <hr class="my-8 border-gray-200 dark:border-gray-700"/>

  <div class=" ">
    <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {content.slice(0,6).map((data,i)=>{
        return (
          <div key={i} class="relative">
          <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
            <img src={data.images[0]} class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Ocean"/>
          </a>
          <div class="relative mt-5">
          <p class="uppercase font-semibold text-lg mb-2.5 text-purple-900-600">{data.category}</p>
            <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">{data.date}</p>
            <a href="#" class="block mb-3 hover:underline">
              <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
               {data.title}
              </h2>
            </a>
            <p class="mb-4 text-gray-700 dark:text-gray-300">{data.description.slice(0,180)} {data.description.length > 180 && '....'}</p>
            <a href="#_" class="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
          </div>
        </div>
        )
      })}
    </div>
  </div>
</section>
  )
}

export default LatestContent