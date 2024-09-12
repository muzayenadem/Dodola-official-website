import React, { useEffect } from 'react'
import content from '../../ComponentsData/content'
import FestivalCard from './FestivalCard'

function Festival() {

  useEffect(()=>{
    document.title= 'dodola festivals'
  })
   
  const contents = content()

  const data = contents.data

  const festival = data.filter(data => data.subCategory == 'Festival')
  console.log({festival})

  if(!festival){
    return null
  }
  if(contents.loading == true){
    return<>Loading................</>
  }
  
  return (
    <section className='dark:bg-gray-900 py-20 lg:px-6'>
        <div className=" container mx-auto ">
          <FestivalCard festival={festival}/>
        </div>
    </section>
  )
}

export default Festival