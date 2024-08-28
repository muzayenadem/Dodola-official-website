import React from 'react'
import Marquee from 'react-fast-marquee'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { beriso, dodoCity, dodolaCiityOffice, dodolaCity2, head, holeCity, mother, samson } from '../../../Images/images'
function NewPost() {
    const [text] = useTypewriter({
        words:['every element is designed with care.', '51.0932 lat And 43.84 lng Located', 'Population of city is 63000 .'],
        typeSpeed:20,
        delaySpeed:2000,
        deleteSpeed:20,
        loop:true
    })
  return (
        <>
          <section className="w-screen">
            <div className=" relative h-auto shadow-lg  rounded-2xl w-full">
              <Marquee  pauseOnHover="true" className={`border-t border-b border-neutral-500 w-full overflow-hidden grid ` }>
                <div className=" flex w-full  flex-col justify-center items-center h-[350px] md:h-[450px]">
                  <img src={dodoCity} className="w-full h-full -opacity-30 dark:opacity-50" alt="" />
                </div>
    
                <div className=" flex flex-col justify-center items-center h-[350px]    md:h-[450px]">
                  <img src={dodolaCity2} className="w-full h-full  dark:opacity-50" alt="" />
                </div>
    
                <div className=" flex flex-col justify-center items-center h-[350px]  md:h-[450px] ">
                  <img src={dodolaCiityOffice} className="w-full h-full  dark:opacity-50" alt="" />
                </div>
    
                <div className=" flex  flex-col justify-center items-center h-[350px]  md:h-[450px]">
                  <img src={holeCity} className="w-full h-full dark:opacity-50" alt="" />
                </div>
    
                <div className=" flex  flex-col justify-center items-center h-[350px]  md:h-[450px] ">
                  <img src={beriso} className="w-full h-full dark:opacity-50 " alt="" />
                </div>
    
                <div className=" flex  flex-col justify-center items-center h-[350px]  md:h-[450px]  ">
                  <img src={samson} className="w-full h-full dark:opacity-50" alt="" />
                </div>
              </Marquee>
              <div className="absolute inset-x-[25%] dark:text-white/90  bottom-5  md:bottom-28 left-[12%] md:left-[20%] z-10 py-5 text-center text-white md:block">
           
              <h1 className=' text-2xl md:text-3xl font-bold'>Welcome to <span className=' text-red-600'>Dodola city</span></h1>
                <h2 className='relative text-xl md:text-2xl font-bold' >Where <span>
                    {text} </span>
                    <Cursor
                    cursorBlinking='false'
                    cursorStyle='|'
                    cursorColor='red'
                    />
                    </h2>
             </div>
            </div>
          </section>
        </>
  )
}

export default NewPost