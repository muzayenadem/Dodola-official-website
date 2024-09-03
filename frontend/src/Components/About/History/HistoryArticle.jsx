import React from 'react'
import { city2, fafate, water } from '../../Images/images'

function HistoryArticle() {
  return (
   
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    <div>
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={water} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">Mountain</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
               Mountain arround dodola city
            </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div class="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        John snow
                    </a> */}

                    <p class="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                </div>

                <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>

    <div>
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={fafate} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">Lakes</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Lakes arround dodola city
                </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div class="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        Arthur Melo
                    </a> */}

                    <p class="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                </div>

                <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>

    <div>
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={city2} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">Rivers</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Rivers arround dodola city
            </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div class="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        Tom Hank
                    </a> */}

                    <p class="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                </div>

                <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default HistoryArticle