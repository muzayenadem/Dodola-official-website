import React, { useState } from 'react'
import questionsData from '../../ComponentsData/questionsData'
import {FaChevronUp } from "react-icons/fa";
function NewQuestions() {
	const [more,setMore] = useState(false)
	const [id,setId] = useState()
	const question = questionsData()

	const {data} = question


	console.log({data})

	const open = (value) =>{
		setId(value)
		setMore(true)
	}
  return (
	<>
	<div className="container p-2 mx-auto sm:p-4 bg-white  dark:bg-gray-900 dark:text-white/80">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Emails</h2>
	<div className="flex flex-col overflow-x-auto text-xs">
		<div className="flex text-left bg-white dark:bg-gray-900 border-b border-opacity-20 dark:border-gray-300 ">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" name="All" className="w-3 h-3 rounded-sm dark:accent-violet-600" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">Sender</div>
			<div className="w-52 px-2 py-3 sm:p-3">Email</div>
			<div className="flex-1 px-2 py-3 sm:p-3">Message</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
		</div>


		{data.map((single,i)=>{
			return (
				<div key={i} className="flex border-b border-opacity-20 dark:border-gray-300 bg-white dark:bg-gray-900">
					<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
						<input type="checkbox" className="w-3 h-3 rounded-sm dark:accent-violet-600" name="Box0" />
					</div>
					<div className="flex items-center justify-center w-32 px-2 py-3 sm:p-3">
						<p>{single.fullName}</p>
					</div>
					<div className="flex items-center justify-center w-52 px-2 py-3 sm:p-3">
						<p>{single.email}</p>
					</div>
					<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
						<div className="flex items-center gap-6">
						{id !== single._id &&
						single.question.map((text,i)=>{
							return (
								i == 0 && <div key={i}>{text}</div>
							)
						})}
						{id !== single._id && single.question.length > 1 && <button onClick={()=>open(single._id)} className='w-6 h-6 flex items-center justify-center rounded-full bg-green-300 dark:bg-purple-500 font-bold'>+{single.question.length}</button>}
						</div>
						{more  && id == single._id &&
						  <div className="flex gap-12 items-end">
							<div className="flex flex-col gap-2">
								{single.question.map((text,i)=>{
								return (
									<div key={i}><span className='text-green-500 font-bold'>{i+1} </span> { text}</div>
								)
							})}
							</div>
							<button onClick={()=> setId('')}> <span className='font-bold text-xl' ><FaChevronUp/></span></button>
						  </div>
						}
					</div>
					<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-600">
						<p>5min ago</p>
					</div>
				</div>
			)
		})}


	</div>
</div>
</>
  )
}

export default NewQuestions