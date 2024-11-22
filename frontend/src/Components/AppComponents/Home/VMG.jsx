import React, { useEffect, useState } from 'react'
import { logo1 } from '../Images/images'
import { Link, useNavigate } from 'react-router-dom';

function VMG() {

    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDark.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    prefersDark.addEventListener("change", handleChange);
    return () => prefersDark.removeEventListener("change", handleChange);
  }, []);
  
  const navigate = useNavigate('')
  return (

    <main class="">
        <section class="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute inset-0 bg-cover bg-center "  ></div>
            
            <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Dodola<br/>City<br/>Adminstration.
                        </h1>
                        <p class="text-xl mb-8 text-gray-300">Dodola is land of wonder and beauty; it’s the habitat of various species of endemic wild life and allocation of best kept secret of tourism sites .</p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/history" class="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Get Started</Link>
                            <Link to="/history" class="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center">Learn More</Link>
                        </div>
                    </div>
                    
                   
                    <div class="w-full md:w-1/2 md:pl-12">
                        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                            <h2 class="text-2xl font-semibold mb-6">Why Dodola City?</h2>
                            <ul class="space-y-4">
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span>Cultural and Historical Significance</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Community Development</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    <span>Advancing Gender Equality</span>
                                </li>
                            </ul>
                        </div>
                    </div>
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

  
  )
}

export default VMG