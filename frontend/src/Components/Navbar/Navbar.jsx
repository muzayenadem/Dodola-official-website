import { MdDarkMode, MdMenu } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import SliderImage from "../Home/SliderImage";
import { logo1 } from "../Images/images";
function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const [me,setMe] = useState('data-twe-carousel-active')

  useEffect(()=>{
    setMe('data-twe-carousel-active')
  },[])
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <nav x-data={{ isOpen: false }} className="container py-3 px-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-8 rounded-md sm:h-10" src={logo1} alt=""/>
            </a>

        
            <div className="flex lg:hidden">
                <button  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  {!isOpen && 
                        <sspan onClick={()=> setIsOpen(true)}  className="w-6 text-3xl font-bold h-6" strokeWidth="2">
                          <MdMenu/>
                    </sspan>
                  }
                  {isOpen &&
                   <svg onClick={()=> setIsOpen(false)}  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
                  }
                </button>
            </div>
        </div>

       
        <div  className={`${isOpen ? 'translate-x-0 opacity-100 ':'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
            <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">History</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Healthy</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Industry</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Education</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Constructions</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
            </div>

            <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                See News
            </a>
            <span onClick={()=>alert ('')} className="text-neutral-200 data-theme-light text-2xl font-bold ml-5"><MdDarkMode/></span>
        </div>
    </nav>
    <SliderImage/>
</section>
</>
  )
}

export default Navbar