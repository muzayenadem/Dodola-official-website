import React from 'react'
import { kantiibaa } from '../Images/images'
import { motion } from 'framer-motion'
function MayorCrd() {
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
               What Mayor is saying
               <br/>
                <span class="text-indigo-600">  Obbo Ayub Dule</span>
            </h2>
            <p class="mt-4 text-gray-600">
            As the Mayor of Dodola City, I am proud to support the development of our official website. This initiative is a significant step toward modernizing our city, promoting transparency, and connecting our community with new opportunities.
            I extend my gratitude to the dedicated volunteers driving this project, showcasing the strength and innovation of our people. Together, we are shaping Dodola’s future—where tradition meets progress. Thank you for your commitment to our city.
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