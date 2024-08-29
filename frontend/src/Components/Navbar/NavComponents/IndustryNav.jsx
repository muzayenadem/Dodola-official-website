import React from 'react'
import { dodoCity } from '../../Images/images'
import { AnimatePresence,motion } from 'framer-motion'

function IndustryNav({setIndustry}){
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
    <Navs setIndustry={setIndustry}/>
  </motion.div>
  </AnimatePresence>
        </>
    )
}

function Navs({setIndustry}) {
  return (
    <div onMouseLeave={()=> setIndustry(false)} className=" flex py-6 px-10 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex w-1/2">
    Industry Nav
    </div>
    <div className="flex w-1/2">
     <img src={dodoCity}/>
    </div>
  </div>
  )
}

export default IndustryNav