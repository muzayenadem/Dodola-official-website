import React from 'react'

function TopIndustry({title,description,latest}) {
  return (
    <div className='dark:bg-gray-800 bg-slate-100'>
        <div class="container  px-6 py-16 mx-auto">
            {latest.map((data,i)=>{
                return (
                    <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br/> your <span class="text-blue-500 ">{data.category} -/- {data.subCategory}</span></h1>
                        
                        <p class="mt-3 text-gray-600 dark:text-gray-400">{description}</p>
                        
                        <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Enjoy your moment</button>
                    </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-3xl" src={data.images[0]} alt="Catalogue-pana.svg"/>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default TopIndustry