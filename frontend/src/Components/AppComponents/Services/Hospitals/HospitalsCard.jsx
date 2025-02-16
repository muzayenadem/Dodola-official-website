import React from 'react'
import { Link } from 'react-router-dom'




function HospitalsCard({hospitals}) {

  return (
    <>
     <div className="flex py-10 flex-col gap-3 justify-center items-center">
                    <h1 className='dark:text-blue-700 text-2xl text-center lg:text-5xl font-bold '>Available Hospitals</h1>
                    <p className='text-lg text-center '>These are the most rated hospitals in dodola city which working carefullly on healthycare</p>
                </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {hospitals.map((data,i)=>{
            return(
                <div
                key={i}
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 dark:bg-gray-800 max-w-xs md:max-w-3xl mx-auto dark:text-white/80 bg-white">
                <div class="w-full md:w-1/3 bg-white  dark:bg-gray-900 grid place-items-center">
                  <img src={data.images[0]} alt="tailwind logo" class="rounded-xl w-full h-full" />
                </div>
                <div class="w-full md:w-2/3 bg-white dark:bg-gray-800 dark:text-white/80 flex flex-col space-y-2 p-3">
                  <div class="flex justify-between item-center">
                    <p class="text-gray-500 font-medium hidden md:block dark:text-white/80">{data.subCategory}</p>
                    <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p class="text-gray-600 font-bold text-sm ml-1">
                        4.96
                        <span class="text-gray-500 dark:text-white/80 font-normal">(76 reviews)</span>
                      </p>
                    </div>
                    <div class="">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    {/* <div class="bg-gray-200 px-3 py-1 rounded-full text-xs dark:text-white/70 font-medium text-gray-800 hidden md:block">
                      Superhost</div> */}
                  </div>
                  <h3 class="font-black text-gray-800 md:text-3xl text-xl dark:text-white/80">{data.name}</h3>
                  <p class="md:text-lg text-gray-500 text-base dark:text-white/60">{data.description.slice(0,220)}....</p>
                  <div className="flex  justify-between">
                    <div className="">
                        <p class="text-xl font-black text-gray-800 dark:text-white/70">
                        $110
                        <span class="font-normal text-gray-600 text-base dark:text-white/60">/night</span>
                      </p>
                    </div>
                    <div className="">
                      <Link to={`/content-detail/${data._id}`} >
                        <button class="px-4 py-2 bg-purple-800 text-white font-semibold  rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                          Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
    </div>
    {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

         {hospitals.map((data,i) =>{
            return (
                <div key={i}>
                 <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={data.images[0]} alt=""/>
    
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">{data.subCategory}</span>
    
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {data.title}
                    </h1>
    
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        {data.description.slice(0,200)}...
                   </p>
    
                    <div className="flex items-center justify-between mt-4">
                        <div> 
                            <p className="text-sm text-gray-700 font-semibold dark:text-gray-300">{data.date ? data.date : data.postedDate}</p>
                        </div>
    
                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
    
                </div>
            </div>
            )
           })}
    </div> */}
    </>
  )
}


export default HospitalsCard