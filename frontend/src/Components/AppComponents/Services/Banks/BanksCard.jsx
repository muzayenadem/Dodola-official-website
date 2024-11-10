
import React, { useState } from 'react'




function BanksCard({banks}) {
    const [defolt, setDefolt] = useState({
        id:'',
        img:'',
    })

  return (
    <>
   
            {/* <section class="container mx-auto p-2 space-y-6 md:p-20 antialiased ">
            {banks.map((data,i)=>{
             return(
              <article
              key={i}
                class=" flex dark:text-white/80 flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-5xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                <img class="w-full max-h-[400px] object-cover rounded-lg md:w-72" src={defolt && data._id == defolt.id ? defolt.img : data.images[0]} alt=""/>
                <div class="">
                    <div className=" grid grid-cols-3 mt-5 md:mt-0 px-2 md:flex gap-2">
                        {data.images.map((img,i)=>{
                            if(i<=4){
                            return(
                                <img onClick={()=> setDefolt({...defolt,id:data._id,img})} src={img} className='w-24 h-24 rounded-md'/>
                            )}
                        })}
                    </div>
                    <div class="p-5 pb-10 w-full">
                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white/80 mt-4">
                            {data.name}
                        </h1>
                        <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                           {data.description.slice(0,130)}....
                        </p>
                    </div>
                    <div class="bg-blue-50 w-full dark:bg-gray-800 dark:text-white/80 p-5">
                        <div class="sm:flex sm:justify-between">
                            <div>
                                <div class="text-lg text-gray-700">
                                </div>
                                <div class="flex items-center">
                                    <div class="flex dark:text-white/80">
                                        <span class="text-gray-900 dark:text-white/80 font-bold">196 km </span> from Bus Station

                                        <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path
                                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path
                                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path
                                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path
                                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path
                                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="text-gray-600 ml-2 dark:text-white/60 text-sm md:text-base mt-1">
                                        16 reviews
                                    </div>
                                </div>
                            </div>
                            <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                      Book Ticket
                    </button>
                        </div>
                        <div class="mt-3 text-gray-600 text-sm md:text-sm dark:text-white/60">
                            {data.title}
                        </div>
                    </div>
                </div>
            </article>
               )
            })}
        </section> */}
     
    {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

         {hotels.map((data,i) =>{
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

export default BanksCard