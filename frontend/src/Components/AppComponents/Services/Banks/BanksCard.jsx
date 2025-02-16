
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function BanksCard({banks}) {
    const [defolt, setDefolt] = useState({
        id:'',
        img:'',
    })

  return (
    <>
   
   <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    {banks.map((data,i)=>{
        return(
            <div
            class="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div class="relative">
            <img class="w-full h-64 object-cover" src={data.images[0]} alt="Nature scene"/>
            <div class="absolute top-0 right-0 bg-teal-500 text-white  px-2 py-1 m-2 rounded-md text-sm font-semibold">
                {data.name}
            </div>
            </div>
            <div class="p-6">
            <h2 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white/80">{data.title.slice(0,30)} {data.title.length > 30 && '...'}</h2>
            <p class="text-gray-600 mb-4 dark:text-white/60">{data.description.slice(0,120)}...</p>
            <div class="flex items-center mb-4">
                <svg class="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
                </svg>
                <span class="text-gray-600 ml-1  dark:text-white/60">4.9 (128 reviews)</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-md font-bold text-gray-800 dark:text-white/60">{data.date}</span>
                <Link to={`/content-detail/${data._id}`} >
                <button class="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                   Detail
                </button>
                </Link>
            </div>
            </div>
        </div>
        )
    })}
</div>
    </>
  )
}

export default BanksCard