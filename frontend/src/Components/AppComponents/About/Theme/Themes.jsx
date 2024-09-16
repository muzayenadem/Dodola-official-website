import React, { useEffect } from 'react'
import { abdiboru, beriso, city, city2, dodoCity, dodolaCiityOffice, dodolaCity2, fafate, fati, hole, holeCity, img1, industrial, logo1, mainEnter, mountain, mousqe, samson, water, water2, wheat, wheat2 } from '../../Images/images'
import TopAbout from '../TopAbout/TopAbout'

function Themes() {
  useEffect(()=>{
    document.title= 'pictures of dodola city'
  })
  return (
    <section className=' dark:bg-gray-900 py-5' >
      <div className="px-5">
      <TopAbout
        title={'Dodola city Images'}
        description={'Enjoy with taking a look at each picture of dodola '}
      />
      </div>
        <div className="container py-20 mx-auto">
        <div className='grid grid-cols-2 md:grid-cols-4  gap-2'>
            <img src={dodolaCiityOffice}/>
            <img src={abdiboru} className= ' row-span-2 col-span-1 h-full'/>
            <img src={city} className=' w-full h-full' />
            <img src={industrial}  className='w-full  h-full'/>
            <img src={water2}  className= ' row-span-2 col-span-1 h-full'/>
            <img src={img1} className=' col-span-2 row-span-2 w-full ' />
            <img src={samson}/>
            <img src={dodoCity} className=' md:hidden'/>
            <img src={dodoCity}  className=' col-span-2 row-span-2 w-full ' />
            <img src={beriso} className='w-full h-full'/>
            <img src={fati} />
            <img src={water} className= ' row-span-2 col-span-1 h-full  w-full '/>
            <img src={logo1} className='h-full w-full'/>
            <img src={wheat2} className='w-full h-full'/>
            <img src={hole} className='w-full h-full' />
            <img src={dodolaCity2} className=' h-full' />
            <img src={dodoCity} className='md:hidden col-span-2 row-span-2 w-full'/>
        </div>
        </div>
    </section>
  )
}

export default Themes