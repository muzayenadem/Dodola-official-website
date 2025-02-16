import React from 'react'
import { Link } from 'react-router-dom'




function SecondarySchoolCard({secondarySchool}) {
   
  return (
    <>
   

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
  {secondarySchool.map((data,i)=>{
    return(
      <div 
      key={i}
    class="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-slate-100  rounded-lg shadow-lg dark:bg-gray-800 p-2">
    <div class="p-2 sm:w-1/2">
        <img class="rounded object-cover w-full sm:h-80 h-60" src={data.images[0]} alt="Article" />
    </div>
    <div class="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
        <div>
            <a href="#"
                class="block sm:mt-2 text-2xl font-semibold text-gray-800  dark:text-white/80 hover:text-gray-600 hover:underline">
                {data.name}</a>
                <p class="mt-2 text-xl font-semibold text-gray-700  dark:text-white/80">
                    {data.title}
                </p>
            <p class="mt-2 text-sm text-gray-800  dark:text-white/80">
              {data.description.slice(0,150)}...
            </p>
        </div>

        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="object-cover h-10 w-10 rounded-full" src={data.images[0]} alt="Avatar" />
                    <a href="#" class="mx-2 font-semibold text-gray-50 dark:text-gray-200">{data.subCategory}</a>
                </div>
                <span class="mx-1 text-xs text-gray-400 dark:text-gray-300">{data.date}</span>
                <Link to={`/content-detail/${data._id}`}  className='px-2 ml-4 py-1 hover:bg-neutral-600 text-white bg-neutral-400 rounded-md mr-1 flex justify-center'>More</Link>
            </div>
        </div>
    </div>
</div>
    )
  })}
</div>
  </>
  )
}

export default SecondarySchoolCard