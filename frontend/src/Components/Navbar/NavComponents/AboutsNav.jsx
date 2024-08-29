import React from 'react'
import { dodolaCity2 } from '../../Images/images'
import { AnimatePresence ,motion} from 'framer-motion'
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
    <div onMouseLeave={()=> setAbout(false)} className="flex  py-6 px-8 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col gap-5 items-start px-16 w-1/2 justify-center py-5">
        <a href='#'>About</a>
        <a href='#'>History</a>
        <a href='#'>Adminstrater Team</a>
        <a href='#'>FAQ</a>
        <a href='#'>History</a>
        <a href='#'>History</a>
    </div>
    <div className="flex w-1/2">
      <img src={dodolaCity2}/>
    </div>
  </div>
  )
}

export default AboutsNav