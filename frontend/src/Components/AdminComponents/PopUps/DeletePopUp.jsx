import axios from 'axios';
import React from 'react'
import { MdOutlineClear } from "react-icons/md";


function DeletePopUp({openDelete,type,title,description,deleteHandler}) {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white/80 shadow-lg shadow-neutral-700 gap-3 flex-col flex p-5 z-10 rounded-md w-[90%]  md:w-[35%] top-[20%] fixed left-[5%] md:left-[32%]'>
      <div className="flex justify-between">
      <p className='text-xl font-semibold'>{title}</p>
      <span onClick={()=> openDelete(false)} className='text-2xl'><MdOutlineClear/></span>
      </div>
      <p>{description}</p>
      <div className="flex ml-6 gap-3  justify-end items-end ">
       <button onClick={()=> openDelete(false)} className='bg-fuchsia-700 text-white/50 font-bold text-center px-4 rounded-lg py-2 hover:bg-fuchsia-900'>Cancel</button>
        <button onClick={deleteHandler} className='bg-red-500 text-white/50 text-center font-bold px-4 rounded-lg py-2 hover:bg-red-700'>Delete {type}</button>
      </div>
    </div>
  )
}


export default DeletePopUp