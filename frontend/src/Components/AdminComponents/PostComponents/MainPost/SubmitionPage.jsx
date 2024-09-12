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
          <h1>{err}</h1>
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