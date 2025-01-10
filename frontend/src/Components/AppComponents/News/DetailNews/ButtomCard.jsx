import React, { useEffect, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import NewsComments from './NewsComments';
import ShareArea from './ShareArea';

import { io } from 'socket.io-client';
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchReaction, fetchSingleNews } from '../../../../Controller/Data/newsSlice';

const socket = io(serverLink); 

function ButtomCard({data,description}) {
    const [reactions, setReactions] = useState({
      likes:data.reactions.filter((single)=>single.type == 'like').length,
      dislikes:data.reactions.filter((single)=>single.type == 'dislike').length
    });
    const [commentsLength, setCommentsLength] = useState(data.comments.length)
    const [open,setOpen] = useState(false)

    console.log({reactttt:data})
     useEffect(() => {
            socket.on('new-comment', (savedComment) => {
              if (savedComment.newsId === data._id) {
                setCommentsLength((prev) => prev + 1);
                setTimeout(() => {
                  setSucces('')
                },2000);
              }
            });
        
            // Cleanup listener on component unmount
        return () => socket.off('new-comment');
          }, [data._id]);
    
        

     
          const handleReaction = async (type) => {
            try {
             const response =  await axios.post(`${serverLink}/news/reaction/${data._id}`, {
                type,
              });
              console.log({newReaction:response.data})

            // socket.on('update-news-reaction', (updatedReaction) => {
            //   if (updatedReaction.newsId === data._id) {
            //     setReactions(prev => prev = response.data.reaction)
            //   }
            // });
        
            setReactions(prev => prev = response.data.reaction)
            return () => {
              socket.off('update-news-reaction');
            };
            } catch (error) {
              console.error('Error adding reaction:', error.response?.data || error.message);
            }
          };
        

  return (
    <div className="p-5">
        <div className="">
            <p className='text-lg'>{description}</p>
        </div>
        <div className="flex gap-6 md:gap-10 py-6">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 items-center content-center">
                <span className='text-xl'><FaRegComments /></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>{commentsLength}</p>
            </div>
            <button onClick={() => handleReaction('like')} className="flex gap-2 items-center content-center ">
                <span className=''><BiLike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>
                   {reactions.likes}
                </p>
            </button>
            <button onClick={() => handleReaction('dislike')} className="flex gap-2 items-center content-center ">
                <span><BiDislike/></span>
                <p className=' text-gray-500 items-center self-center text-sm dark:text-white/50'>
                   {reactions.dislikes}
                </p>
            </button>
            <ShareArea data={data}/>
        </div>
        <div className={` ${open ? '' : 'hidden'}`}>
                <NewsComments data={data} comment={data.comments} />
        </div>
    </div>
  )
}

export default ButtomCard