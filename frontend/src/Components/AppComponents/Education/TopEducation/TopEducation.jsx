import React from 'react'

function TopEducation({title,description,latest}) {
  return (
    <section class="bg-white dark:bg-gray-900 lg:dark:bg-gray-800">
    <div class="container px-2 lg:px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex  lg:items-center">
           {/* <></>  */}
            <div class="mt-8 lg:w-1/2 lg:px-6 gap-1 flex flex-col lg:mt-0">
                {latest.map((data,i)=>{
                  return  <p key={i} class="lg:text-5xl font-semibold text-blue-500 ">{data.category} -/- {data.subCategory}</p>
                })}
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                    {title}
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    “{description}”
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">Education is Important</h3>
                <p class="text-gray-600 dark:text-gray-300">Dodola is very best for education</p>
            </div>
            {latest.map(({images},i)=>{
            return  <img key={i} class="object-cover hidden lg:block  object-center lg:w-1/2 lg:mx-6 w-full h-56 rounded-lg lg:h-[36rem]" src={images} alt=""/>
           })}
        </div>
    </div>
</section>
  )
}

export default TopEducation