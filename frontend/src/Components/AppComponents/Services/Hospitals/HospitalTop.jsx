import React from 'react'
import { hospital1, water, water2, wheat, wheat2 } from '../../Images/images'

function HospitalTop() {
  return (
    <div>
        <div class="relative flex flex-col items-center  pb-10 mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
  
  <div class="w-full h-64 lg:w-1/2 lg:h-auto">
      <img class="h-full rounded-xl w-full object-cover" src={wheat} alt="Winding mountain road"/>
  </div>
  <div
      class="max-w-lg bg-white dark:bg-gray-800 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
      <div class="flex flex-col p-12 md:px-16">
          <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Hospitals In Dodola City</h2>
          <p class="mt-4">
          Dodola City has several hospitals and healthcare facilities that serve the community. The notable hospitals include
          A major healthcare center in the city, providing general medical services to residents. It is equipped with various
           departments and healthcare professionals to meet the community's health needs.
          </p>
          <div class="mt-8">
              <a href="#"
                  class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                  More</a>
          </div>
      </div>
  </div>


</div>
    </div>
  )
}

export default HospitalTop