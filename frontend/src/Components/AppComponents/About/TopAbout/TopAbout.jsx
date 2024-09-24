import React from 'react'

function TopAbout({title, description,image}) {
  return (
  
    <div className="p-1 mx-auto  sm:p-10 md:p-16 bg-gray-100 dark:bg-gray-800 rounded-md dark:text-gray-800">
	<div className="flex flex-col max-w-7xl mx-auto overflow-hidden rounded">
		{image.map((single,i)=>{
      return <img key={i} src={single.images[0]} alt="" className="w-full h-60 rounded-md sm:h-96 dark:bg-gray-500" />
    })}
		<div className="p-6 pb-12 m-4 md:ml-[5%] mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md bg-white dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{title} </a>
				<p className="text-xs dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>{description}</p>
			</div>
		</div>
	</div>
</div>
  )
}

export default TopAbout