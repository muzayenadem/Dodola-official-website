import { MdDarkMode } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { img1 } from "../Images/images";
import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });
function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const data = [img1,img1,img1]
  const [me,setMe] = useState('data-twe-carousel-active')

  useEffect(()=>{
    setMe('data-twe-carousel-active')
  },[])
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <nav x-data={{ isOpen: false }} className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
            </a>

        
            <div className="flex lg:hidden">
                <button  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  {!isOpen && 
                        <svg onClick={()=> setIsOpen(true)}  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
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
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Edjucation</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Constructions</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
            </div>

            <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                See News
            </a>
            <span onClick={()=>alert ('')} className="text-neutral-200 data-theme-light text-2xl font-bold ml-5"><MdDarkMode/></span>
        </div>
    </nav>


    <div
  id="carouselExampleCaptions"
  className="relative h-[40vh] md:h-[70vh]"
  data-twe-carousel-init
  data-twe-ride="carousel">
  {/* <!--Carousel indicators--> */}
  <div
    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="0"
      data-twe-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

  {/* <!--Carousel items--> */}
  <div
    class="relative w-full h-[40vh] md:h-[70vh] capitalize overflow-hidden after:clear-both after:block after:content-[0]">
    {/* <!--First item--> */}
    <div
      class="relative float-left -mr-[100%] w-full h-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      data-twe-carousel-active
      style={{backfaceVisibility:'hidden'}}>
      <img
        src={img1}
        className="block w-full h-full opacity-60 "
        alt="..." />
      <div
        className="absolute inset-x-[25%] bottom-24 hidden py-5 text-center text-white md:block">
        <h5 className="text-3xl font font-bold capitalize">Dodola Industrail park</h5>
        <p className="text-xl font-bold">
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full  h-full  transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style={{backfaceVisibility:'hidden'}}>
      <img
        src={img1}
        class="block w-full h-full opacity-60"
        alt="..." />
        <div
        className="absolute inset-x-[25%] bottom-24 hidden py-5 text-center text-white md:block">
        <h5 className="text-3xl font font-bold">Dodola Industrail park</h5>
        <p className="text-xl font-bold">
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full  h-full  transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style={{backfaceVisibility:'hidden'}}>
      <img
        src={img1}
        class="block w-full h-full opacity-60"
        alt="..." />
      <div
        className="absolute inset-x-[25%] bottom-24 hidden py-5 text-center text-white md:block">
        <h5 className="text-3xl font font-bold">Dodola Industrail park</h5>
        <p className="text-xl font-bold">
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
  </div>

  {/* <!--Carousel controls - prev item--> */}
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  {/* <!--Carousel controls - next item--> */}
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>

    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Welcome to dodola city with a full of intention</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">Dodola City is a picturesque town in Ethiopia's Oromia Region, known for its rich cultural heritage and stunning natural beauty. Nestled in the highlands near the Bale Mountains, Dodola offers breathtaking landscapes and outdoor activities. 
                obcaecati illum mollitia.</p>
            <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Start enjoying with dodola's fresh
            </button>
            <p className="mt-3 text-sm text-gray-400 ">feel free to contact us </p>
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
    </div>
</section>

</>
  )
}

export default Navbar