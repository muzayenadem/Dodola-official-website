import React from 'react'
import { logo1 } from '../../Images/images'

function LatestJob({latest}) {
    console.log({latest})
  return (
    <section>
        <div className="">
            <img src={logo1}/>
        </div>
     {
        latest.length ?
        <>
         <p className='text-gray-900 text-xl p-4 dark:text-white/80'>The latest job released lately</p>
        <div className='p-3'>
            {latest.map(({job,address,company,images},i)=>{
                return (
                    <div key={i}>
                        <div className="">
                            <p>{job.title}</p>
                        </div>
                        <div className="">
                            <img src={images[0]} className='w-full rounded-md'/>
                        </div>
                        <div className="py-2">
                            <p className='text-blue-600'>{job.category}/-{job.type}/-{job.experience}</p>
                            <div className=" flex justify-end items-end">
                            <button className='underline text-fuchsia-600'>See detail</button>
                        </div>
                        </div>
                    </div>
                    )
                })}
        </div>
        </> :
        <div className='px-3 py-1'>There is no latest job here</div>
     }
    </section>
  )
}

export default LatestJob