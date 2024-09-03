import React from 'react'

function TopHistory() {
  return (
    <div className="">
        <div className=" bg-purple-400 dark:bg-purple-500 pb-20  py-5 px-10 text-white/80 rounded-lg mx-5">
        <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">Dodola is one of the Aanaas in the Oromia of Ethiopia.</h1>
                {/* <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Magaalaa Dodola</a>
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Bara Dhaabatte</a>
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Eenyhuun hundeeffamte</a>
                </div> */}
            </div>
            <div className="dark:text-gray-800 py-6 lg:w-1/2">
            <p className="text-sm dark:text-white/80">
                It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). 
                </p>
            </div>
        </div>
        <div className="bg-fuchsia-300  dark:bg-white py-5 w-[70%] text-black h-32 rounded-md ml-[15%] -mt-16">
            <h3 className='text-xl lg:text-4xl font-bold text-fuchsia-400 capitalize text-center'>Feel free to know more about dodola city with reading its history</h3>
        </div>
    </div>

  )
}

export default TopHistory