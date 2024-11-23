import React from 'react'
import { galma1, galma2, logo1 } from '../../Images/images'

function TopHistory() {
  return (
    <>
    {/* <div className="">
        <div className=" bg-purple-400 dark:bg-purple-500 pb-20  py-5 px-10 text-white/80 rounded-lg mx-5">
        <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">History of Dodola City Administration</h1>
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
    </div> */}

    <main class="">
       
        <section class="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute inset-0 bg-cover bg-center ] opacity-55" style={{backgroundImage:`url(${galma1})`}}></div>
            
            <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-between">
                  
                    <div class="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            History of<br/>Dodola City.<br/>Adminstration
                        </h1>
                        <p class="text-xl mb-8 text-gray-300">Feel free to know more about dodola city with reading its history</p>
                        {/* <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#" class="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Get Started</a>
                            <a href="#" class="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center">Learn More</a>
                        </div> */}
                    </div>
                    
    
                    <img src={logo1} className='w-auto rounded-lg h-96 '></img>
                           {/* <div class="w-full md:w-1/2 md:pl-12">
                        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                            <h2 class="text-2xl font-semibold mb-6">Dodola City History?</h2>
                            <ul class="space-y-4">
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span>Lightning-fast Performance</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Bank-grade Security</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    <span>AI-powered Insights</span>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                class="block fill-white dark:fill-gray-900"
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0 100L60 87.5C120 75 240 50 360 37.5C480 25 600 25 720 31.25C840 37.5 960 50 1080 56.25C1200 62.5 1320 62.5 1380 62.5L1440 62.5V100H0Z"
                />
                </svg>
            </div>
        </section>

   
    </main>


</>
  )
}

export default TopHistory