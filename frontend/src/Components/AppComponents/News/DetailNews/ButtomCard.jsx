import React, { useEffect, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import NewsComments from './NewsComments';
import ShareArea from './ShareArea';

import { io } from 'socket.io-client';
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';

const socket = io(serverLink); 

function ButtomCard({data,comment}) {
    const [commentsLength, setCommentsLength] = useState(comment.length)
    const [open,setOpen] = useState(false)

     useEffect(() => {
            socket.on('new-comment', (savedComment) => {
              if (savedComment.newsId === data._id) {
                setCommentsLength((prev) => prev + 1);
              }
            });
        
            // Cleanup listener on component unmount
        return () => socket.off('new-comment');
          }, [data._id]);
    


  return (
    <div className=" container mx-auto p-6">
        <div className="">
            <p className='text-lg'>{data.description}</p>
        </div>
        <div className="flex gap-6 md:gap-10 py-6">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 items-center content-center">
                <span className='text-xl'><FaRegComments/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>{commentsLength}</p>
            </div>
            <div className="flex gap-2 items-center content-center ">
                <span><BiDislike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>23</p>
            </div>
            <div className="flex gap-2 items-center content-center ">
                <span className=''><BiLike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>532</p>
            </div>
            <ShareArea/>
        </div>
        <div className={` ${open ? '' : 'hidden'}`}>
                <NewsComments data={data} comment={comment} />
        </div>
    </div>
  )
}

export default ButtomCard