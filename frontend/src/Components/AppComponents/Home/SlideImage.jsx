import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { beriso, dodoCity, dodolaCiityOffice, dodolaCity2, galma2, galma1,limat1, head, holeCity, mother, samson } from '../Images/images'
function SlideImage() {
    const [text] = useTypewriter({
        words:['every element is designed with care.', '51.0932 lat And 43.84 lng Located', 'Population of city is 150,000 .','Quantity of male 63,069 .','Quantity of female 86,931 .'],
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

              {shuffledArray.map((img,i)=>{
                return(
                  <div key={i} className=" flex w-full  flex-col justify-center items-center h-[350px] md:h-[450px]">
                  <img src={img} className="w-full h-full -opacity-30 dark:opacity-50" alt="" />
                </div>
                )
              })}
    
                {/* <div className=" flex flex-col justify-center items-center h-[350px]    md:h-[450px]">
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
                </div> */}
              </Marquee>
              <div className="absolute inset-x-[25%] dark:text-white/90  bottom-5  md:bottom-28 left-[12%] md:left-[20%] z-10 py-5 text-center text-white md:block">
           
              <h1 className=' text-2xl md:text-3xl font-bold'>Welcome to <span className=' text-red-600'>Dodola City Administration</span></h1>
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

export default SlideImage

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// Example usage:
const myArray =[
  dodoCity,galma1,galma2,dodolaCiityOffice,holeCity,beriso,samson,limat1
]
const shuffledArray = shuffleArray(myArray);
