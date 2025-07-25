import React from 'react'
import { kantiibaa } from '../Images/images'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
function MayorCrd() {
       const { t } = useTranslation();
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}
     class="px-2 pt-10 pb-20 w-full flex justify-center">
    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div class="lg:w-1/2">
            <div class={`lg:scale-110 h-80 bg-cover lg:h-full  rounded-b-none border lg:rounded-lg`} style={{backgroundImage:`url(${kantiibaa})`}}>
            </div>
        </div>
        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 class="text-3xl text-gray-800 font-bold">
               {t('kantibaAdvise')}
               <br/>
                <span class="text-indigo-600">{t('kantibaName')}</span>
            </h2>
            <p class="mt-4 text-gray-600">
                {t('kantibaSpeach')}
             </p>
            <div class="mt-8">
                <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Read More</a>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default MayorCrd