import React from 'react'
import { dodoCity } from '../../Images/images'
import { AnimatePresence,motion } from 'framer-motion'

function OfficesNav({setOffice}){
    return(
        <>
        <AnimatePresence >
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 15 }}
    style={{ translateX: "-50%" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="absolute left-1/2 w-full top-12 bg-white text-black"
  >
    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
    <Navs setOffice={setOffice}/>
  </motion.div>
  </AnimatePresence>
        </>
    )
}

function Navs({setOffice}) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setOffice(false)} className=" flex py-6 px-10 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col py-5 px-16 w-1/2">
      <motion.h2  className=' text-3xl'>Welcom to Dodola Offices serves </motion.h2>
      <p>Select the office that you wanted to contact or visit</p>
    </div>
    <div className="flex w-1/2">
     <img src={dodoCity}/>
    </div>
  </motion.div>
  )
}

export default OfficesNav