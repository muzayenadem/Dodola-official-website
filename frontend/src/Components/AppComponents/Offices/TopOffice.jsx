import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { filterEmployeeFromServer } from '../../../Controller/Data/employeeSlice'
import { useDispatch } from 'react-redux'

function TopOffice({title,description,latest}) {
    const {officeId} = useParams()
    const dispatch = useDispatch()

    const links = [    
    'Mayor Office',
    'Construction Office',
    'Education Office',
    'Health Office',
    "Cultural Office",
    "Human Resource Office",
    'Information Technology Office',  
    'Police Department Office',
    'Bussiness and Finance Office',
    'Environmental and Natural Resources Office',
    'Social Services Office',
    'Media and Communication Office'
    ]
  return (
    <div>
      <header class="bg-slate-100 dark:bg-gray-800">
        {latest.map((data,i)=>{
            return(
                <div key={i} class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{title}</h1>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                            <div class="grid gap-6 mt-8 sm:grid-cols-2">
                                {/* <div class={`flex items-center ${officeId == 'Mayor Office' ?'text-blue-700' : 'text-gray-900 dark:text-gray-200'}   -px-3 `}>
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
            
                                    <span class="mx-3">Mayor Office</span>
                                </div>
            
                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
            
                                    <span class="mx-3">Construction Office</span>
                                </div>
             */}
                                {links.map((link,i)=>{
                                    return(
                                        <Link onClick={() => dispatch(filterEmployeeFromServer(link))} to={`/office/${link}`} >
                                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                        
                                                <span class={`flex items-center ${officeId == link ?'text-blue-700' : 'text-gray-900 dark:text-gray-200'}   -px-3 `}>{link}</span>
                                            </div>
                                        </Link>
                                    )
                                })}
                                
            
                                {/* <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
            
                                    <span class={`flex items-center ${officeId == 'Education Office' ?'text-blue-700' : 'text-gray-900 dark:text-gray-200'}   -px-3 `}>Education Office</span>
                                </div>
            
                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
            
                                    <span class="mx-3">Culture Office</span>
                                </div>
            
                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
            
                                    <span class="mx-3">Police Department</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src={data.images[0]} alt="glasses photo"/>
                    </div>
                </div>
            )
        })}
</header>
    </div>
  )
}

export default TopOffice