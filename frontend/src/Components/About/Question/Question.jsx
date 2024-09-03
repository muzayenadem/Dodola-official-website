import React from 'react'

function Question() {
  return (
    <section className="bg-white py-20 dark:text-white/80 dark:bg-gray-900">
	<div className="container flex flex-col justify-center lg:px-24 xl:px-48 py-10 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions About dodola city</h2>
		<p className="mt-4 mb-8 dark:text-neutral-400">You will get answers for  all the questions that in your mind about dodola city which we assumed</p>
		<div className="space-y-4">
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
		</div>
	</div>
</section>
  )
}

export default Question