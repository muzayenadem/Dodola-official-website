import React from 'react'
import { Link } from 'react-router-dom'

function LatestContents({latestContents}) {
  return (
     <section class="lg:container mx-3 lg:mx-auto py-14">
            <div class="flex items-center justify-between">
                <h1 class="text-4xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Latest Contents </h1>
            </div>
            <hr class="my-8 border-gray-200 dark:border-gray-700"/>
    
      <div class=" ">
        <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {latestContents.slice(-6).reverse().map((data,i)=>{
            return (
              <div key={i} class="relative">
              <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
                <img src={data.images[0]} class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Ocean"/>
              </a>
              <div class="relative mt-5">
              <p class="uppercase font-semibold text-lg mb-2.5 text-purple-900-600">{data.category}</p>
                <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">{data.date}</p>
                <Link to={`/content-detail/${data._id}`} class=" mb-3 hover:underline">
                  <h2 class="text-2xl font-bold  text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                   {data.title}
                  </h2>
                </Link>
                <p class="mb-4 text-gray-700 dark:text-gray-300">{data.description.slice(0,180)} {data.description.length > 180 && '....'}</p>
                <Link to={`/content-detail/${data._id}`} class="font-medium underline text-purple-600 dark:text-purple-400">Read more</Link>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LatestContents