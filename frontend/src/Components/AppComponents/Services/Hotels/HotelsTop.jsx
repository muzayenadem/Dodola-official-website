import React from 'react'
import { water2 } from '../../Images/images'

function HotelsTop() {
  return (
    <div>
        {/* <div className='flex justify-start gap-4 container mx-auto bg-white dark:bg-gray-900 '>
            <div className="flex w-[50%]">
                <img src={water2} className='w-[80%] rounded-xl'/>
            </div>
            <div className="flex"></div>
        </div> */}
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative opacity-80 -mt-20 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-500"> Favorite Hotel. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        There are a lot of beuitifull hotels i dodola city which fulfill all your need
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="https://gofind.vercel.app"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="http://gofind.vercel.app"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HotelsTop