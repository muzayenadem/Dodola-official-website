import React from 'react'
import { dodoCity, students } from '../../Images/images'
import { AnimatePresence,motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function  EducationNav({setEducation}){
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
            <Navs setEducation={setEducation}/>
          </motion.div>
    </AnimatePresence>
  </>
    )
}

function Navs({setEducation}) {
  const {t} = useTranslation()
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setEducation(false)} className=" flex py-6 px-10 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col px-16 py-5 w-1/2">
     <h1 className='text-3xl'>Industry in dodola city</h1>
     <p className='px-4 py-2'>wheather you interested to invest in dodola or not let enjoy with our industries</p>
     <div className="flex p-6">
      <ul className='underline flex flex-col gap-2'>
        <Link onClick={()=> setEducation(false)} to={'/elemantary'}><li>{t('elemantary')}</li></Link>
        <Link onClick={()=> setEducation(false)} to={'/secondary-school'}><li>{t('highSchool')}</li></Link>
        <Link onClick={()=> setEducation(false)} to={'/technical-class'}><li>{t('technicalClass')}</li></Link>
        <Link onClick={()=> setEducation(false)} to={'/college'}><li>{t('college')}</li></Link>
        <Link onClick={()=> setEducation(false)} to={'/degree'}><li>{t('degree')}</li></Link>
      </ul>
     </div>
    </div>
    <div className="flex w-1/2">
     <img src={students} className='rounded-lg'/>
    </div>
  </motion.div>
  )
}


export default EducationNav