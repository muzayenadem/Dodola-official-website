import React from 'react'
import { agri, agri2, beriso, galma1, galma2, industrial, limat1, mainEnter, mainEnter3, night1, night2, plants1, plants2, samson, wheat2 } from '../Images/images'

function Gallery() {
  const gallery = [galma1,plants1,galma2,limat1,samson,beriso,night1,agri, night2,plants2,industrial,wheat2,]
  return (
    <div className='container mx-auto py-10'>
   <h1 class="text-2xl font-semibold px-4 my-5 text-gray-800 capitalize lg:text-3xl dark:text-white">Gallery </h1>

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {gallery.map((img,i)=>{
          return(
            <div key={i} class="group cursor-pointer relative">
            <img
              src={img}
              alt="Image 1"
              class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>  
        )
      })}

      </div>
    </div>
  )
}

export default Gallery