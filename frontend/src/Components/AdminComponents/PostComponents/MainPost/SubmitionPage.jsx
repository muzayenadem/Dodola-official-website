import React from 'react'

function SubmitionPage({setMethod,method}) {
    const clickHandler = () =>{
        setMethod({...method,submitionPage:false,congraPage:true})
    }
  return (
    <div class="container px-6 py-6 mx-auto text-center">
        <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Almost Done you just have to click the button bellow</h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">please be sure first that everything is as you want before publish</p>
            <button onClick={clickHandler}  class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
               Publish it
            </button>
        </div>
    </div>
  )
}

export default SubmitionPage