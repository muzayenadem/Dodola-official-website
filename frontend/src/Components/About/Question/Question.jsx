import React, { useState } from 'react'

function Question() {
	const [more,setMore] = useState(false)
  return (
    <section className="bg-white py-16 dark:text-white/80 dark:bg-gray-900">
	<div className="container flex flex-col bg-neutral-100 dark:bg-gray-800 justify-center lg:px-24 xl:px-48 py-10 mx-auto md:p-8 border-b-[1px] border-b-neutral-300 dark:border-neutral-600 ">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions About dodola city</h2>
		<p className="mt-4 mb-8 dark:text-neutral-400">You will get answers for  all the questions that in your mind about dodola city which we assumed</p>
		<div className="space-y-4 ">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is dodola city growing fast?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Absolutely. Dodola city is the most growing fast in oromia region</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is dodola city an approperate for investment?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Dodola is naturally gifted city with stable air condition which makes it more suitable for any invetment idea</p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is there any apportunity to invest in dodola city now?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">when was dodola founded?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">who was named dodola for dodola city?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">how many people dodola city had when it's founded ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
			</details>
			{
				more && 
				<>
				<details className="w-full border rounded-lg" open="">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is dodola city growing fast?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Absolutely. Dodola city is the most growing fast in oromia region</p>
				</details>
				<details className="w-full border rounded-lg">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is dodola city an approperate for investment?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Dodola is naturally gifted city with stable air condition which makes it more suitable for any invetment idea</p>
				</details>
				<details className="w-full border rounded-lg" open="">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is there any apportunity to invest in dodola city now?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
				</details>
				<details className="w-full border rounded-lg" open="">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">when was dodola founded?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
				</details>
				<details className="w-full border rounded-lg" open="">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">who was named dodola for dodola city?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
				</details>
				<details className="w-full border rounded-lg" open="">
					<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">how many people dodola city had when it's founded ?</summary>
					<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-neutral-400">Certainly . Dodola city is always open for invester who wants to grow and wants to make fainancailly his country </p>
				</details>
				</>
			}
		</div>
		<a onClick={()=> setMore(!more)} className='underline py-4'>{more ? 'Less' : "More"}</a>
	</div>
	<div className="container flex bg-neutral-100 dark:bg-gray-800  flex-col justify-center lg:px-24 xl:px-48 py-10 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl capitalize ">Feel free to ask any question about dodola</h2>
		<div className="flex py-10">
			<form className='flex flex-col w-full lg:w-[70%] gap-5'>
			<div>
				<label for="username" class="block text-sm text-gray-500 dark:text-gray-300">Full Name</label>

				<input type="text" placeholder="Muzayen Adem" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
			</div>


			<div>
			<label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

			<div class="relative flex items-center mt-2">
				<span class="absolute">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
				</span>

				<input type="email" placeholder="muzayen@example.com" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
				</div>
			</div>

			<div>
			<label for="Description" class="block text-sm text-gray-500 dark:text-gray-300">Question</label>

				<textarea placeholder="is dodola..." class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
				
				<p class="mt-3 text-xs text-gray-400 dark:text-gray-600">is dodola suitable for living in?</p>
			</div>
			<button class="px-6 py-2 font-medium md:w-72 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
				Submit
			</button>
			</form>
			</div>
		</div>
</section>
  )
}

export default Question