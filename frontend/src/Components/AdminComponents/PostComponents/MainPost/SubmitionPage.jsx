import axios from 'axios'
import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'
function SubmitionPage({setMethod,method}) {
  const [err,setErr] = useState('')
  const [loading,setLoading] = useState(false)
    const clickHandler = async () =>{
      setLoading(true)
      try {
            const formData = new FormData()
            formData.append('data',JSON.stringify(data))
            for(let i = 0; i <= images.length; i++){
              formData.append('files',images[i]) 
            }
          
          const response = await axios.post(`${serverLink}/post-main-content`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true, // This is important for sending credentials
          })
          .then( (res) => {
            return res
          })
          .catch( (err) =>{
            return err
          })
          console.log({response})

          if(response.data){
            setLoading(false)
            setMethod({...method,submitionPage:false,congraPage:true})
          }
          if(response.response.data){
            setLoading(false)
            setErr(response.response.data)
          }
      } catch (error) {
        console.log({error:error.message})
      }
    }
    const data = useSelector(state => state.mainPost.data)
    const images = useSelector(state => state.mainPost.images)
  
  return (
    <div class="container px-6 py-6 mx-auto text-center">
        <div class="max-w-lg mx-auto">
        {err &&
    <div className="py-3">
    <div className="w-full text-white bg-red-500 rounded-md">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                </path>
            </svg>

                <p className="mx-3">{err}</p>
            </div>

            <button onClick={()=> setErr('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    </div>
    </div>
   }
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Almost Done you just have to click the button bellow</h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">please be sure first that everything is as you want before publish</p>
           {!loading && <button onClick={clickHandler}  class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
               Publish it
            </button>}
           {loading && <div className="w-16  h-16 mx-auto py-20 mt-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>}
        </div>
    </div>
  )
}

export default SubmitionPage