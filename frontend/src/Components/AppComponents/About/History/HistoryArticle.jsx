import React from 'react'
import { city2, fafate, water } from '../../Images/images'

function HistoryArticle() {
  return (
   
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    <div>
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={water} alt=""/>

        <div className="mt-8">
            <span className="text-blue-500 uppercase">Mountain</span>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
               Mountain arround dodola city
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div className="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        John snow
                    </a> */}

                    <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                </div>

                <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>

    <div>
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={fafate} alt=""/>

        <div className="mt-8">
            <span className="text-blue-500 uppercase">Lakes</span>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Lakes arround dodola city
                </h1>

            <p  className="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div  className="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        Arthur Melo
                    </a> */}

                    <p  className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                </div>

                <a href="#"  className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>

    <div>
        <img  className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={city2} alt=""/>

        <div  className="mt-8">
            <span className="text-blue-500 uppercase">Rivers</span>

            <h1  className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Rivers arround dodola city
            </h1>

            <p  className="mt-2 text-gray-500 dark:text-gray-400">
            The highest points in this woreda are Mount Ilale, Mount Korduro and Mount Somkeru. Rivers include the Keresa, Ukuma, Negeso and Gude Yerso which are tributaries of the Shebelle.
            </p>

            <div  className="flex items-center justify-between mt-4">
                <div>
                    {/* <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                        Tom Hank
                    </a> */}

                    <p  className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                </div>

                <a href="#"  className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default HistoryArticle