import React from 'react'
import { agri, agri2, dodoCity, industrial } from '../../Images/images'
import { AnimatePresence,motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setIndustry(false)} className=" flex py-6 px-10 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col px-16 py-5 w-1/2">
     <h1 className='text-3xl'>Industry in dodola city</h1>
     <p className='px-4 py-2'>wheather you interested to invest in dodola or not let enjoy with our industries</p>
     <div className="flex p-6">
      <ul className='underline flex flex-col gap-2'>
        <Link onClick={()=> setIndustry(false)} to={'/industrial-park'}><li>Idustrial Park</li></Link>
        <Link onClick={()=> setIndustry(false)} to={'/agriculture'}><li>Agriculture</li></Link>
        <Link onClick={()=> setIndustry(false)} to={'/marketing'}><li>Marketing</li></Link>
        <Link onClick={()=> setIndustry(false)} to={'/manufacture'}><li>Manufacturing</li></Link>
      </ul>
     </div>
    </div>
    <div className="grid grid-cols-3 gap-3">
     <img src={agri} className='w-full h-full rounded-md'/>
     <img src={agri2}  className='w-full h-full rounded-md'/>
     <img src={industrial}  className='w-full h-full rounded-md'/>
    </div>
  </motion.div>
  )
}

export default IndustryNav