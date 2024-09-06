import React, { useState } from 'react'
import Progress from './Progress'
import Category from './Category'
import SubCategory from './SubCategory'
import { Link } from 'react-router-dom'
import InputPage from './Components/InputPage'
import ReviewManPost from './Components/ReviewMainPost/ReviewManPost'
import { useDispatch } from 'react-redux'
import { setMainPost } from '../../../../Controller/Posts/MainPostSlicer'
import SubmitionPage from './SubmitionPage'
import CongraPage from './CongraPage'

      
function MainPost() {
    const [method,setMethod] = useState({
        category:false,
        subCategory:false,
        inputPage:false,
        reviewPage:false,
        submitPage:false,
        congraPage:false,
        defaults:true,
        data:''
      })
    const [postData,setPostData] = useState({
        category:'',
        subCategory:'',
        title:'',
        description:'',
        date:'',
    })   

    const dispatch = useDispatch()


  return (
    <div className='bg-white dark:bg-gray-900 py-10 dark:text-white/80'>
        <div className=" pb-6 border-b-[1px] dark:border-b-neutral-700 border-b-neutral-300 ">
            <h2 className='capitalize text-xl lg:text-3xl text-center '>Remember that you are posting the permanet content on this website</h2>
        </div>
       <Progress method={method} setMethod={setMethod}/>
       <div className=" min-h-[50vh]">
        {method.defaults &&  <Category method={method} postData={postData} setPostData={setPostData} setMethod={setMethod}/>}
        {method.subCategory &&  <SubCategory data={method.data} postData={postData} setPostData={setPostData}  method={method} setMethod={setMethod}/>}
        {method.inputPage && <InputPage method={method} postData={postData} setPostData={setPostData} setMethod={setMethod}/> }
        {method.reviewPage && <ReviewManPost/>}
        {method.submitPage && <SubmitionPage setMethod={setMethod}/>}
        {method.congraPage && <CongraPage/>}
       </div>
       {!method.congraPage && 
          <div className={`flex ${!method.defaults || method.subCategory || method.inputPage ? 'justify-between ' : ' justify-end'} px-6  items-end`}>
          {!method.defaults & method.subCategory ?
              <button onClick={()=>setMethod({...method,subCategory:false,defaults:true})}  className='bg-blue-800  text-white  py-2 px-5 rounded-md hover:bg-blue-900 text-center items-center '>Back</button>
              :null
            }
          {method.inputPage && 
              <button onClick={()=>setMethod({...method,inputPage:false,subCategory:true})}  className='bg-blue-800  text-white  py-2 px-5 rounded-md hover:bg-blue-900 text-center items-center '>Back</button>
          }
          {method.reviewPage && 
              <button onClick={()=>setMethod({...method,reviewPage:false,inputPage:true})}  className='bg-blue-800  text-white  py-2 px-5 rounded-md hover:bg-blue-900 text-center items-center '>Back</button>
          }
          {method.submitPage && 
              <button onClick={()=>setMethod({...method,submitPage:false,reviewPage:true})}  className='bg-blue-800  text-white  py-2 px-5 rounded-md hover:bg-blue-900 text-center items-center '>Back</button>
          }
        <div className="flex gap-6">
        <Link to='/admin'>
               <button  className='bg-purple-800  text-white  py-2 px-5 rounded-md hover:bg-purple-900 text-center items-center '>Cancel</button>
          </Link>
          {method.inputPage && 
                <button onClick={()=>setMethod({...method, inputPage:false,reviewPage:true}) & dispatch(setMainPost(postData))}  className='bg-green-800  text-white  py-2 px-5 rounded-md hover:bg-green-900 text-center items-center '>Next</button>
          }
           {method.reviewPage && 
                <button onClick={()=>setMethod({...method, reviewPage:false,submitPage:true})}  className='bg-green-800  text-white  py-2 px-5 rounded-md hover:bg-green-900 text-center items-center '>Next</button>
          }
        </div>
         </div>
       }
    </div>
  )
}

export default MainPost