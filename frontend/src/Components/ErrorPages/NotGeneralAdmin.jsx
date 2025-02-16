import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotGeneralAdmin({title,description,route}) {
    const navigate = useNavigate('')
  return (
    <div className='w-full bg-white dark:bg-gray-800 min-h-[100vh] flex dark:text-white/80 justify-center items-center'>
        <div class="max-w-md border dark:border-neutral-700 rounded-lg">
  <div class="flex flex-col p-5 rounded-lg shadow dark:bg-gray-900 bg-white">
	<div class="flex">
	  <div>
		<svg class="w-6 h-6 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
	  </div>

	  <div class="ml-3">
		<h2 class="font-semibold text-gray-800 dark:text-white/80">{title}</h2>
		<p class="mt-2 text-sm text-gray-600 dark:text-white/60 leading-relaxed">{description}</p>
	  </div>
	</div>

	<div class="flex justify-end items-center mt-3">
	  <button onClick={()=> navigate('/admin')} class="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
		Cancel
	  </button>
	</div>
  </div>
</div>
    </div>
  )
}

export default NotGeneralAdmin