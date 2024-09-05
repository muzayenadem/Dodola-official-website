import React from 'react'
import { sport, sport1, sport2, sport3 } from '../../Images/images'

function Sport() {
  return (
   <section className=' bg-white py-16 dark:bg-gray-900'>
     <div class=" container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    <div>
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={sport} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">At Diredawa</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
               Dodola city football club
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
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={sport1} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">At Robe</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Dodola city football club
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
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={sport3} alt=""/>

        <div class="mt-8">
            <span class="text-blue-500 uppercase">At Asella</span>

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
             Dodola city football club
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
   </section>
  )
}

export default Sport