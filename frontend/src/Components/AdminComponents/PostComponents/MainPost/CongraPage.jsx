import React from 'react'
import { useSelector } from 'react-redux'


function CongraPage() {
    const mainPost = useSelector(state=> state.mainPost.data)
    const {category,subCategory} = mainPost
    console.log({category,subCategory})
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            CONGRATULATIONS!! your <span class="text-blue-500">{category} /- {subCategory}</span> Content has been succesfully published
        </h2>

        <div class="inline-flex w-full mt-10 sm:w-auto">
            <a href="/admin" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </a>
        </div>
    </div>
</section>
  )
}

export default CongraPage