import React from 'react'

function NewsComments() {
  return (
    <div>
        <div class="bg-gray-100 dark:bg-slate-600 p-6">
        <h2 class="text-lg font-bold mb-4">Comments</h2>
        <div class="flex flex-col space-y-4">
           {[1,2,3,4].map((data,i)=>{
            return(
                <div key={i} class="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold">John Doe</h3>
                    <p class="text-gray-700 dark:text-white/80 text-sm mb-2">Posted on April 17, 2023</p>
                    <p class="text-gray-700 dark:text-white/60">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )
           })}
             <h3 className='text-blue-700 underline px-2 my-3'>More</h3>
            <form class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-bold mb-2">Add a comment</h3>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white/70 font-bold mb-2" for="name">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-gray-700 dark:text-white/80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white/70 font-bold mb-2" for="comment">
                        Comment
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white/80 leading-tight focus:outline-none focus:shadow-outline"
                        id="comment" rows="3" placeholder="Enter your comment"></textarea>
                </div>
                <button
                    class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default NewsComments