import React, { useEffect } from 'react'
// import ListOfContent from './ContentPlace/ListOfContent'
// import ContentTopButton from './ContentPlace/ContentTopButton'
import jobs from '../../ComponentsData/jobsData'
import { Link } from 'react-router-dom'
import ListOfJobs from './JobsPlace/ListOfJobs'
import JobsTopButton from './JobsPlace/JobsTopButton'



function ManageJobs() {

    useEffect(()=>{
        document.title= 'content management'
      })
   
    const job = jobs()

   
    const data = job.data

    console.log({data})
    if(job.loading == true){
      return<>Loading................</>
    }
    console.log({data})
  return (
    <div className='flex flex-col py-12 gap-5 min-h-[100vh]'> 
       <JobsTopButton/>
       <ListOfJobs jobs={data}/>
     </div>
  )
}


export default ManageJobs