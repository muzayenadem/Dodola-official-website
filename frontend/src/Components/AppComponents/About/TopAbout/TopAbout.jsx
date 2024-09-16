import React from 'react'

function TopAbout({title, description}) {
  return (
    <div className='w-full h-28 bg-slate-200 dark:bg-fuchsia-800 px-2 py-5 rounded-md'>
        <div className="py-2">
          <h1 className='text-3xl dark:text-white/80 text-center '>{title}</h1>
        </div>
        <div className="">
          <p className='text-center text-2xl dark:text-white/80'>{description}</p>
        </div>
    </div>
  )
}

export default TopAbout