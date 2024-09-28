import React from 'react'
import { MdShare } from 'react-icons/md'


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
              <div className=' m-2 pb-4 px-1 my-2 dark:bg-900' key={i}>
            <div class="max-full px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
            <div className="py-2 flex justify-between ">
                  <p className='text-blue-300'>{job.title}</p>
                  <span className='px-5 font-bold text-xl'><MdShare/></span>
              </div>
              <div class="flex items-center justify-between">
                <div className="flex gap-4">
                  <span className='text-sm font-semibold text-blue-600'>Deadline</span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{job.deadline}</span>
                </div>
                  <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Apply</a>
              </div>

              <div class="mt-2">
                  <a href="#" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Accessibility tools for designers and developers</a>
                  <p class="mt-2 text-gray-600 dark:text-gray-300">{job.description}</p>
              </div>

              <div class="flex items-center justify-between mt-4">
                  <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

                  {/* <div class="flex items-center">
                      <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
                      <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Khatab wedaa</a>
                </div> */}
            </div>
          </div>
      </div>
        )})}
    </div>
  )
}

export default JobCard