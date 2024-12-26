import React from 'react'
import newsData from '../../ComponentsData/newsData'
import { Link } from 'react-router-dom'

function Latest() {
    const data = newsData()

    const news = data.data

    const latest = news.length > 0 && news.slice(-3)


 
    
    console.log({dataaaa:news[0]})
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
    <section class="bg-white dark:bg-gray-900">
    <div class="container py-10 mx-auto">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

            <button class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700"/>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {news.slice(-6).reverse().map((data,i)=>{
                return(
                    <div key={i}>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={data.files[0]} alt=""/>

                <div class="mt-8">
                    <span class="text-blue-500 uppercase">{data.category}</span>

                    <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{data.title}</h1>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">{data.description.slice(0,190)} {data.description.length >= 190 && '...'}</p>

                    <div class="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                               {data.asAdmin && data.admin.fname} {data.asAdmin && data.admin.lname}
                            </a>

                            <p class="text-sm text-gray-500 dark:text-gray-400">{data.eventDate}</p>
                        </div>

                        <Link to={`news-detail/${data._id}`} class="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                    </div>

                </div>
            </div>
                )
            })}
         
        </div>
    </div>
</section>
  )
}

export default Latest