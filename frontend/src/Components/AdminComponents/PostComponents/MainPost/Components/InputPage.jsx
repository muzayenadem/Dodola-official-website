import React, { useState } from 'react'
import InputImages from './InputImages'

function InputPage({method,setMethod,postData,setPostData}) {

  return (
    <div className='py-10 px-2 md:px-4 lg:px-6'>
      <h4 className='text-lg lg:text-xl text-center py-6'>
        Fill all required space carefully for the <span className='text-blue-600'>{postData.category} /- {postData.subCategory}</span> you are posting
      </h4>
      <div className="flex flex-col gap-5 px-4 lg:px-10">
          <div className="relative mb-3 ">
          <input
            type="text"
            onChange={(e)=>setPostData({...postData,title:e.target.value})}
            className="peer m-0 lg:w-2/4 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-6 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com" />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Enter Title for {postData.category} / {postData.subCategory}</label
          >
        </div>
        <div className="relative mb-3 ">
          <textarea
            type="text"
            onChange={(e)=>setPostData({...postData,description:e.target.value})}
            className="peer m-0 lg:w-2/3 min-h-32 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-6 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com" />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Enter Description for {postData.category} / {postData.subCategory}</label
          >
        </div>

        <InputImages/>        

        <div className='relative mb-3 w-52'>
        <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Dead Line</label>

        <input 
        type="date" 
        onChange={(e)=>setPostData({...postData,date:e.target.value})}
        placeholder="John Doe" 
        class="block  mt-2 w-full placeholder-gray-400/70 dark:text-white/80 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border- blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
    </div>
      </div>
    </div>
  )
}

export default InputPage