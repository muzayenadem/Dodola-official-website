import React, { useEffect } from 'react'
import HistoryArticle from '../History/HistoryArticle'

function Festival() {
  useEffect(()=>{
    document.title= 'dodola festivals'
  })
  return (
    <section className='dark:bg-gray-900 py-20 lg:px-6'>
        <div className=" container mx-auto ">
            <HistoryArticle/>
        </div>
    </section>
  )
}

export default Festival