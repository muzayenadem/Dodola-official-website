import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'

import { io } from 'socket.io-client';

const socket = io(serverLink); // Replace with your backend URL

function NewsComments({data,comment}) {
    const [comments , setComments] = useState({
        newsId:data._id , name:'' , comment:''
    })


    
    const [prevComment, setPrevComment] = useState(comment)
    const [more,setMore] = useState(false)
	const [err,setErr] = useState('')
	const [loading,setLoading] = useState(false)
	const [succes,setSucces] = useState('')



	const submitHandler = async(e) => {
		e.preventDefault()
		try {
			const response = await axios.post(`${serverLink}/new-comment`,comments)

			if (response.data){
				setSucces(response.data)
			}
            const latest = response.data.comment
            comment.push(latest)
            setPrevComment(latest)
            console.log({succes})

		} catch (error) {
			if(error.response){
				setErr(error.response.data)
				return null
			}
			if(error.name == 'AxiosError'){
				setErr(error.message)
				return null
			}
			if(error.request){
				setErr(error.request)
				return null
			}
		}
	}

  // Handle like
  const handleLike = async (id) => {
    try {
      await axios.put(`${serverLink}/comment/like/${id}`);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  // Handle dislike
  const handleDislike = async (id) => {
    try {
      await axios.put(`${serverLink}/comment/dislike/${id}`);
    } catch (error) {
      console.error('Error disliking comment:', error);
    }
  };

    useEffect(() => {
        socket.on('new-comment', (savedComment) => {
          if (savedComment.newsId === data._id) {
            setPrevComment((prev) => [...prev,savedComment]);
           //setPrevComment(prev => prevComment.push(savedComment))
          }
        });
    
        // Cleanup listener on component unmount
    return () => socket.off('new-comment');
      }, [data._id]);

    console.log({succes})

  
    useEffect(() => {
        // Listen for real-time like updates
        socket.on('update-comment-like', (updatedComment) => {
          setPrevComment((prev) =>
            prev.map((comment) =>
              comment._id === updatedComment._id ? updatedComment : comment
            )
          );
        });
    
        // Listen for real-time dislike updates
        socket.on('update-comment-dislike', (updatedComment) => {
          setPrevComment((prev) =>
            prev.map((comment) =>
              comment._id === updatedComment._id ? updatedComment : comment
            )
          );
        });
    
        return () => {
          socket.off('update-comment-like');
          socket.off('update-comment-dislike');
        };
      }, [data._id]);
    
  return (
    <div>
        <div class="bg-gray-100 dark:bg-slate-600 p-6">
        <h2 class="text-lg font-bold mb-4">Comments</h2>
        <div class="flex flex-col space-y-4">
           {prevComment.map((comment,i)=>{
            return(
                <div key={i} class="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold">{comment.name}</h3>
                    <p class="text-gray-700 dark:text-white/80 text-sm mb-2">{comment.timestamp}</p>
                    <p class="text-gray-700 dark:text-white/60">{comment.comment}</p>
                    <div className='flex gap-10 m-5'>
                        <button onClick={() => handleLike(comment._id)}>👍 {comment.likes}</button>
                        <button onClick={() => handleDislike(comment._id)}>👎 {comment.dislikes}</button>
                    </div>
                </div>
            )
           })}
             <h3 className='text-blue-700 underline px-2 my-3'>More</h3>
            <form onSubmit={submitHandler} class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md" >
                <h3 class="text-lg font-bold mb-2">Add a comment</h3>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white/70 font-bold mb-2" for="name">
                        Name
                    </label>
                    <input
                        onChange={(e) => setComments({...comments, name:e.target.value})}
                        class="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-gray-700 dark:text-white/80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white/70 font-bold mb-2" for="comment">
                        Comment
                    </label>
                    <textarea
                        onChange={(e) => setComments({...comments,comment:e.target.value})}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white/80 leading-tight focus:outline-none focus:shadow-outline"
                        id="comment" rows="3" placeholder="Enter your comment"></textarea>
                </div>
                <button
                    class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                </button>
                {
				succes && 
				<div class="w-full text-white bg-emerald-500">
				<div class="container flex items-center justify-between px-6 py-4 mx-auto">
					<div class="flex">
						<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
							<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
							</path>
						</svg>

						<p class="mx-3">{succes.message}</p>
					</div>

					<button onClick={()=> setSucces('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>
			}
			{
				err &&
				<div class="w-full text-white bg-red-500">
					<div class="container flex items-center justify-between px-6 py-4 mx-auto">
						<div class="flex">
							<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
								<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
								</path>
							</svg>

							<p class="mx-3">{err}</p>
						</div>

						<button onClick={()=> setErr('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
							<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			}
            </form>
        </div>
    </div>
    </div>
  )
}

export default NewsComments