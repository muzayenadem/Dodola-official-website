import React from 'react'
import { dodolaCity2, water } from '../../Images/images'
import { AnimatePresence ,motion} from 'framer-motion'
import { Link } from 'react-router-dom'
function AboutsNav({setAbout,about}){
    return (
        <>
    <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                style={{ translateX: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-1/2 w-full top-12 bg-white text-black"
            >
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <Component setAbout={setAbout}/>
            </motion.div>
            </AnimatePresence>
            </>
    )
}
function Component({setAbout}) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setAbout(false)} className="flex  py-6 px-8 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col px-16 py-5 w-1/2">
     <h1 className='text-3xl'>To Know More About Dodola City</h1>
     <p className='px-4 py-2'>Dodola is Naturally gifted city</p>
     <div className="flex p-6">
      <ul className='underline flex flex-col gap-2'>
        <Link onClick={()=> setAbout(false)} to={'/history'}><li>History</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/festival'}><li>Festival</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/theme'}><li>Theme</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/feutures'}><li>Feutures</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/sport'}><li>Sport</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/religions'}><li>Religions</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/question'}><li>FAQ</li></Link>
      </ul>
     </div>
    </div>
    <div className="flex w-1/2">
      <img src={water} className='rounded-md'/>
    </div>
  </motion.div>
  )
}

export default AboutsNav