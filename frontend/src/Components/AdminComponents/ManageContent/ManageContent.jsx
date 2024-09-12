import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import content from '../../ComponentsData/content'
import ListOfContent from './ContentPlace/ListOfContent'
import ContentTopButton from './ContentPlace/ContentTopButton'



function ManageContent() {

    useEffect(()=>{
        document.title= 'content management'
      })
   
    const contents = content()

   
    const data = contents.data

    console.log({data})
    if(contents.loading == true){
      return<>Loading................</>
    }

  return (
    <div className='flex flex-col py-12 gap-5 min-h-[100vh]'> 
       {/* <div className="hidden md:block"><ContentTopButton/></div> */}
       <ContentTopButton/>
       <ListOfContent contents={data}/>
     </div>
  )
}

export default ManageContent