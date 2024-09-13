import React from 'react'
import { MdOutlineClear } from "react-icons/md";

function UnPuplishPopUp({setOpenPublish,type,title,description,unPublishHandler}) {
  return (
    <div className='bg-white shadow-lg dark:bg-gray-900 dark:text-white/80  shadow-neutral-700 gap-3 flex-col flex p-5 z-10 rounded-md w-[90%]  md:w-[35%] top-[20%] fixed left-[5%] md:left-[32%]'>
      <div className="flex justify-between">
      <p className='text-xl font-semibold'>{title}</p>
      <span onClick={()=> setOpenPublish(false)} className='text-2xl'><MdOutlineClear/></span>
      </div>
      <p>{description}</p>
      <div className="flex ml-6 gap-3  justify-end items-end ">
      <button onClick={()=> setOpenPublish(false)} className='bg-fuchsia-700 text-white/50 font-bold text-center px-4 rounded-lg py-2 hover:bg-fuchsia-900'>Cancel</button>
        <button onClick={unPublishHandler} className='bg-red-500 text-white/50 text-center font-bold px-4 rounded-lg py-2 hover:bg-red-700'>Unpublish listing</button>
      </div>
    </div>
  )
}

export default UnPuplishPopUp