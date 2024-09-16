import React from 'react'




function AgricultureCard({agriculture}) {
 
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

         {agriculture.map((data,i) =>{
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
                            {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a> */}
    
                            <p className="text-sm text-gray-700 font-semibold dark:text-gray-300">{data.date ? data.date : data.postedDate}</p>
                        </div>
    
                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
    
                </div>
            </div>
            )
           })}


    </div>
  )
}


export default AgricultureCard