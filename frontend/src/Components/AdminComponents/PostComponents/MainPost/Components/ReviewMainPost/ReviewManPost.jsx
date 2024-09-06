import React, { useState } from 'react'
import TopReview from './TopReview'
import SeeMore from './SeeMore'

function ReviewManPost() {
  const [seeMore,setSeeMore] = useState(false)
  return (
    <>
        <div className=' border-b-[1px] border-b-neutral-300 py-2 dark:border-b-neutral-600'>
            <h2 className='text-lg  lg:text-2xl text-center'>your posting looks like this wheb published</h2>
        </div>
        {!seeMore && <TopReview seeMore={seeMore} setSeeMore={setSeeMore}/>}
        {seeMore && <SeeMore seeMore={seeMore} setSeeMore={setSeeMore}/>}
    </>
  )
}

export default ReviewManPost