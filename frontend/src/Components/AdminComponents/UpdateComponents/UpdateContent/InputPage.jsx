import React, { useState } from 'react'
import InputImages from './InputImages'
import { Link } from 'react-router-dom'

function InputPage({method,setMethod,postData,setPostData,stateData}) {

  return (
      <div className="py-5">

      <div className="relative mb-3 ">
          <input
            type="text"
            value={postData.name !== stateData.name ? postData.name || ` ${stateData.name}` : stateData.name}
            onChange={(e)=>setPostData({...postData,name:e.target.value})}
            className="peer m-0 lg:w-2/4 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-6 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com" />
          <label
            htmlFor="floatingInput"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Name of {postData.category} / {postData.subCategory}</label
          >
        </div>

          <div className="relative mb-3 ">
          <input
            type="text"
            value={postData.title !== stateData.title ? postData.title || ` ${stateData.title}` : stateData.title}
            onChange={(e)=>setPostData({...postData,title:e.target.value})}
            className="peer m-0 lg:w-2/4 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-6 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com" />
          <label
            htmlFor="floatingInput"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Title of {postData.category} / {postData.subCategory}</label
          >
        </div>

        <div className="relative mb-3 ">
          <textarea
            type="text"
            value={postData.description !== stateData.description ? postData.description || ` ${stateData.description}` : stateData.description}
            onChange={(e)=>setPostData({...postData,description:e.target.value})}
            className="peer m-0 lg:w-2/3  min-h-32 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com" />
          <label
            htmlFor="floatingInput"
            className="pointer-events-none absolute left-0 bottom-0 origin-[0_0] border border-solid border-transparent px-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Description of {postData.category} / {postData.subCategory}</label
          >
        </div>

        <InputImages stateData={stateData}/>        

        <div className='relative mb-3 mt-5 w-52'>
        <label htmlFor="Birthday" className="block text-sm text-gray-500 dark:text-gray-300">Dead Line</label>

        <input 
        type="date" 
        value={postData.date !== stateData?.date ? postData.date || `${stateData?.date}` : stateData?.date}
        onChange={(e)=>setPostData({...postData,date:e.target.value})}
        placeholder="John Doe" 
        className="block  mt-2 w-full placeholder-gray-400/70 dark:text-white/80 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border- blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
      </div>
    </div>
  )
}

export default InputPage