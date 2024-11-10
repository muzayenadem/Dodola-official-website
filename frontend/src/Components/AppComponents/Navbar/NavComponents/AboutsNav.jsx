import React from 'react'
import { dodolaCity2, water } from '../../Images/images'
import { AnimatePresence ,motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function AboutsNav({setAbout,about}){
  const {t} = useTranslation()
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
  const {t} = useTranslation()
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setAbout(false)} className="flex  py-6 px-8 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
    <div className="flex flex-col px-16 py-5 w-1/2">
     <h1 className='text-3xl'>To Know More About Dodola City</h1>
     <p className='px-4 py-2'>Dodola is Naturally gifted city</p>
     <div className="flex p-6">
      <ul className='underline flex flex-col gap-2'>
        <Link onClick={()=> setAbout(false)} to={'/history'}><li>{t('history')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/festival'}><li>{t('festivals')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/theme'}><li>{t('theme')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/feutures'}><li>{t('features')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/sport'}><li>{t('sport')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/religions'}><li>{t('religions')}</li></Link>
        <Link onClick={()=> setAbout(false)} to={'/question'}><li>{t('question')}</li></Link>
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