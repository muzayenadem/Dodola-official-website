import React from 'react'
import { water2 } from '../../Images/images'
import { Link } from 'react-router-dom'

function LatestNews({latest}) {
    console.log({latest})
  return (
   <div className='bg-white dark:bg-gray-800 p-6'>
        <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-600">Latest</button>
            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border- dark:text-gray-600">Popular</button>
        </div>


        <div className="flex flex-col divide-y dark:divide-gray-300">
            {latest.length &&
            latest.map((data,i)=>{
                return (
                     <div key={i} className="">
                        <Link to={`/news-detail/${data._id}`}>
                        <div  className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={data.files[0]} />
                        <div className="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{data.title}</a>
                            <p className="mt-auto text-xs dark:text-gray-600">5 minutes ago
                                <a rel="noopener noreferrer" href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">{data.category}</a>
                            </p>
                        </div>
                        </div>
                        </Link>
                    </div>
                )
            })}

        </div>
   </div>
  )
}

export default LatestNews