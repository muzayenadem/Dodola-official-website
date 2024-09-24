import React, { useState } from 'react'
import TopAbout from '../TopAbout/TopAbout'
import axios from 'axios'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'

function Question() {
	const [more,setMore] = useState(false)
	const [err,setErr] = useState('')
	const [loading,setLoading] = useState(false)
	const [succes,setSucces] = useState('')

	const [data,setData] = useState({
		fullName:'',
		email:'',
		question:''
	})


	const submitHandler = async(e) => {
		e.preventDefault()
		try {
			const response = await axios.post(`${serverLink}/ask`,data)

			if (response.data){
				setSucces(response.data)
			}
			

		} catch (error) {
			if(error.response){
				setErr(error.response.data)
				return null
			}
			if(error.name == 'AxiosError'){
				setErr(error.message)
				return null
			}
			if(error.request){
				setErr(error.request)
				return null
			}
		}
	}
  return (
	<>
    <section className="bg-white py-5 dark:text-white/80 dark:bg-gray-900">
		<div className="px-5">
		{/* <TopAbout 
		   title={'Relative Qusestion'}
		   description={"Feel free to aks any question about dodola if you don't find in the relative question bellow"}
		/> */}
		</div>
	<div className="container my-16 flex flex-col bg-neutral-100 dark:bg-gray-800 justify-center lg:px-24 xl:px-48  mx-auto md:p-8 border-b-[1px] border-b-neutral-300 dark:border-neutral-600 ">
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
	<div className="container px-2 flex bg-neutral-100 dark:bg-gray-800  flex-col justify-center lg:px-24 xl:px-48 py-10 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl capitalize ">Feel free to ask any question about dodola</h2>
		<div className="flex py-10">
			<form onSubmit={submitHandler} className='flex flex-col w-full lg:w-[70%] gap-5'>
			<div>
				<label for="username" class="block text-sm text-gray-500 dark:text-gray-300">Full Name</label>

				<input onChange={(e)=> setData({...data,fullName:e.target.value})} type="text" placeholder="Muzayen Adem" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
			</div>


			<div>
			<label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

			<div class="relative flex items-center mt-2">
				<span class="absolute">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
				</span>

				<input onChange={(e)=> setData({...data,email:e.target.value})} type="email" placeholder="muzayen@example.com" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
				</div>
			</div>

			<div>
			<label for="Description" class="block text-sm text-gray-500 dark:text-gray-300">Question</label>

				<textarea onChange={(e)=> setData({...data,question:e.target.value})} placeholder="is dodola..." class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
				
				<p class="mt-3 text-xs text-gray-400 dark:text-gray-600">is dodola suitable for living in?</p>
			</div>
			<button class="px-6 py-2 font-medium md:w-72 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
				Submit
			</button>
			{
				succes && 
				<div class="w-full text-white bg-emerald-500">
				<div class="container flex items-center justify-between px-6 py-4 mx-auto">
					<div class="flex">
						<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
							<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
							</path>
						</svg>

						<p class="mx-3">You finished the tasks.</p>
					</div>

					<button onClick={()=> setSucces('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>
			}
			{
				err &&
				<div class="w-full text-white bg-red-500">
					<div class="container flex items-center justify-between px-6 py-4 mx-auto">
						<div class="flex">
							<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
								<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
								</path>
							</svg>

							<p class="mx-3">{err}</p>
						</div>

						<button onClick={()=> setErr('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
							<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			}
			</form>
			</div>
		</div>
</section>
</>
  )
}

export default Question