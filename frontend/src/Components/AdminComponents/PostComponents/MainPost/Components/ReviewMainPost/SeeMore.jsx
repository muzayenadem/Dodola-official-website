
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

function SeeMore({seeMore,setSeeMore}) {
  return (
    <>
    <div className='px-6 py-5 '>
        <span onClick={()=> setSeeMore(false)} className='dark:text-white/50 text-2xl font-bold'><FaArrowAltCircleLeft/></span>
    </div>
    </>
  )
}

export default SeeMore