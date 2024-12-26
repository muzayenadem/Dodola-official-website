import React, { useState } from 'react'
import { MdShare } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import NewsComments from './NewsComments';
import ShareArea from './ShareArea';


function ButtomCard({data}) {
    const [open,setOpen] = useState(false)
  return (
    <div className=" container mx-auto p-6">
        <div className="">
            <p className='text-lg'>{data.description}</p>
        </div>
        <div className="flex gap-6 md:gap-10 py-6">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 items-center content-center">
                <span className='text-xl'><FaRegComments/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>348</p>
            </div>
            <div className="flex gap-2 items-center content-center ">
                <span><BiDislike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>23</p>
            </div>
            <div className="flex gap-2 items-center content-center ">
                <span className=''><BiLike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>532</p>
            </div>
            <div className="flex gap-2 items-center content-center ">
                <span><MdShare/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>Share</p>
            </div>
        </div>
        <ShareArea/>
        <div className={` ${open ? '' : 'hidden'}`}>
                <NewsComments/>
        </div>
    </div>
  )
}

export default ButtomCard