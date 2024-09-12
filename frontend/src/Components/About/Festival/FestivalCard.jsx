import React from 'react'
import { water } from '../../Images/images'

function FestivalCard({festival}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
       {festival.map((data,i) =>{
        return (
            <div key={i}>
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={data.images[0]} alt=""/>

            <div class="mt-8">
                <span class="text-blue-500 uppercase">{data.subCategory}</span>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {data.title}
                </h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">
                    {data.description}
               </p>

                <div class="flex items-center justify-between mt-4">
                    <div>
                        {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                            John snow
                        </a> */}

                        <p class="text-sm text-gray-500 dark:text-gray-400">{data.date ? data.date : data.postedDate}</p>
                    </div>

                    <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                </div>

            </div>
        </div>
        )
       })}
    </div>
  )
}

export default FestivalCard