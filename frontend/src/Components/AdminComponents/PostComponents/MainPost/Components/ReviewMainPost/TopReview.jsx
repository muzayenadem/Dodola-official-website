import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TopReview({seeMore,setSeeMore}) {
    const dispatch = useDispatch()
    const images = useSelector(state => state.mainPost.images)
    const mainPost = useSelector(state=> state.mainPost.data)
    const {category,subCategory,title,date,description} = mainPost
    const cutSize = description.slice(0,180)
    console.log({mainPost})
  return (
    <div className='py-10'>
    <div className='w-full lg:w-2/3 xl:w-1/3 px-3 md:w-2/3 '>
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={URL.createObjectURL(images[0])} alt=''/>
        <div class="mt-8">
            <span class="text-blue-500 uppercase">{category} /- {subCategory}</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white" >{title}</h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">{cutSize}...</p>

            <div class="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        Arthur Melo
                    </a> */}

                    <p class="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                </div>

                <a onClick={()=> setSeeMore(true)} href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>
    </div>
  )
}

export default TopReview