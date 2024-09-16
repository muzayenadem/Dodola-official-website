import React from 'react'


function JobCard({data}) {

   if(data.filterLoading){
    return (
      <div className="flex items-center  justify-center px-32 py-60 dark:bg-gray-900  md:p-32 md:py-60 min-h-[65vh] space-x-2">
      <div className="w-4 h-4 rounded-full animate-spin px-5 bg-violet-800"></div>
      <div className="w-3.5 h-3.5 rounded-full animate-spin px-4 bg-violet-700"></div>
      <div className="w-3 h-3 rounded-full animate-spin px-3 bg-violet-600"></div>
      <div className="w-2 h-2 rounded-full animate-spin px-2 bg-violet-500"></div>
      <div className="w-1.5 h-1.5 rounded-full px-2 animate-spin bg-violet-400"></div>
    </div>
    )
  }
  if(data.error){
    return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>{data.error}</div>
  
  }
    if(!data.data.length & data.filterLoading == false){
        return <div className='text-center py-32  dark:bg-gray-800'>there is no data </div>
      }
    const jobs = data.data
  return (
    <div>
        {jobs.map(({job,address,company,images},i)=>{
            return(
                <div className=' m-2 py-4 px-1' key={i}>
                    <img src={images[0]} className='w-full md:h-[500px] rounded-md'/>
                    <div className="py-3">
                      <p className='text-blue-300'>{job.title}</p>
                      <p>{company.companyName}</p>
                    </div>
                    <div className="flex justify-end items-end">
                      <div className="flex gap-4 px-2">
                        <button className='bg-neutral-700 hover:bg-neutral-800 rounded-md px-4 py-2 text-center'>Detail</button>
                        <button className='bg-violet-800 hover:bg-violet-900 rounded-md px-4 py-2 text-center'>Applay</button>
                      </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default JobCard