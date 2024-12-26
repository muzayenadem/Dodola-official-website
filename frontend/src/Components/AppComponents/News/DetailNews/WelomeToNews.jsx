import React from 'react'

function WelomeToNews({detail}) {
  return (
    <header class="bg-slate-400 dark:bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 ">
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
      Welcome to <span class="text-pink-300">Our</span><span class="text-purple-300">News</span><span class="text-blue-300">Page</span>
    </h1>
    <p class="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight mb-8">
      We're so excited to have you here! Check out our latest news about Adama city 
      
    </p>
    <a href="#" class="inline-block bg-white text-pink-500 hover:text-pink-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
    {detail.map((data,i)=>{
        return(
            <h2>{data.category}</h2>
        )
      })}
    </a>
  </div>
</header>
  )
}

export default WelomeToNews