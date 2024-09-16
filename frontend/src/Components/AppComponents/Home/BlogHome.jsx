import React from 'react'
import { beriso, community, dodolaCiityOffice, dodolaCity2, head, holeCity, mainEnter, mother, wheat2 } from '../Images/images'

function BlogHome() {
  return (
    <section className="bg-white dark:text-white/80  dark:bg-gray-900">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={community} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5 dark:bg-gray-800">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Volunteer and Community Engagement</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>Dodola City strongly encourages community involvement through various volunteer opportunities that allow residents and visitors to contribute to the city's development and well-being. Whether you're interested in environmental conservation, education, healthcare, or cultural preservation, there are numerous ways to get involved and make a difference in Dodola..</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={dodolaCiityOffice} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Dodola Head Office</h3>
					<span className="text-xs dark:text-white/30">January 21, 2021</span>
					<p>Dodola City's head office is highly efficient, with a well-organized and equipped office that ensures effective management of administrative functions and development projects, driving the city's progress.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={beriso} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Development And Construction</h3>
					<span className="text-xs dark:text-white/30">January 22, 2021</span>
					<p>Dodola City is rapidly developing with new construction projects and well-maintained roads, improving connectivity and supporting economic growth. The expanding infrastructure reflects the city's commitment to progress and accessibility.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 ">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={dodolaCity2} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Healthcare facilities</h3>
					<span className="text-xs dark:text-white/30">January 23, 2021</span>
					<p>Dodola City is well-served by healthcare facilities, including Dodola General Hospital, Medda Wolabu Hospital, and Walif Hospital. These institutions provide quality medical services, ensuring residents have access to comprehensive healthcare..</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={head} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Head Office Manager</h3>
					<span className="text-xs dark:text-white/30">January 24, 2021</span>
					<p>Dodola City is efficiently managed by its head office, which oversees all administrative functions and development projects, ensuring coordinated progress and improved quality of life for residents.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={mother} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Equality Of Gender</h3>
					<span className="text-xs dark:text-white/30">January 25, 2021</span>
					<p>
					Dodola City ensures gender equality in management by providing equal opportunities and representation for all genders in administrative and decision-making roles, fostering a diverse and inclusive work environment..</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={wheat2} />
				<div className="p-6 space-y-2 dark:bg-gray-800">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Agrgiculture</h3>
					<span className="text-xs dark:text-white/30">January 26, 2021</span>
					<p>
					Dodola City is an agricultural center known for its fertile lands that produce wheat, potatoes, and a variety of other crops. These products are key to the local economy and food security, supported by a blend of traditional and modern farming practices for sustainable harvests.</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-800 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>
  )
}

export default BlogHome