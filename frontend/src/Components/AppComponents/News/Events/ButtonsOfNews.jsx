import React, { useState } from 'react'
import { filterNewsFromServer, reFetchNews, searchNews } from '../../../../Controller/Data/newsSlice'

import { useDispatch } from 'react-redux'

function ButtonsOfNews({latest}) {
   const [value,setValue] = useState('')
   const [open,setOpen] = useState(false) 
   const dispatch = useDispatch()
   const searchHandler = () =>{
    dispatch(searchNews(value))
    setOpen(false)
}
   const buttonLinks = [
    {value:'All Category',func:()=> dispatch(reFetchNews()) & setOpen(false)},
    {value:'Goverbment & public Adminstration',func: ()=> dispatch(filterNewsFromServer('Goverbment & public Adminstration')) & setOpen(false)},
    {value:'Healthycare',func: ()=> dispatch(filterNewsFromServer('Healthycare')) & setOpen(false)},
    {value:'Education',func: ()=> dispatch(filterNewsFromServer('Education')) & setOpen(false)},
    {value:'Construction and infrustructure',func: ()=> dispatch(filterNewsFromServer('Construction and infrustructure')) & setOpen(false)},
    {value:'Information Technology',func: ()=> dispatch(filterNewsFromServer('Information Technology')) & setOpen(false)},
    {value:'Agriculture',func: ()=> dispatch(filterNewsFromServer('Agriculture')) & setOpen(false)},
    {value:'Bussiness and Finance',func: ()=> dispatch(filterNewsFromServer('Bussiness and Finance')) & setOpen(false)},
    {value:'Environmental and Natural Resources',func: ()=> dispatch(filterNewsFromServer('Environmental and Natural Resources')) & setOpen(false)},
    {value:'Social Services',func: ()=> dispatch(filterNewsFromServer('Social Services')) & setOpen(false)},
    {value:'Media and Communication',func: ()=> dispatch(filterNewsFromServer('Media and Communication')) & setOpen(false)}
]
  return (
    <div>

			<div className="flex flex-col space-y-8 md:space-y-12 p-4 rounded-md bg-white dark:bg-gray-800">

            <div className="flex gap-2">
        <div className="w-[88%] md:w-[100%]">
            <input  
            type='search'
            onChange={(e)=> setValue(e.target.value)}
            onInput={searchHandler}
            placeholder='search here '
            className='px-4 w-full border-[1px] border-neutral-300 dark:border-neutral-600 rounded-lg py-2 focus:outline-none  dark:bg-gray-800'/>
        </div>
        {/* <div onClick={()=> setOpen(true)} className=" text-2xl px-2 font-bold">...</div> */}
        <div x-data="{ isOpen: true }" class="flex items-center">
    <span class="border border-transparent"></span>

    <div class="relative">
       
        <button onClick={()=> setOpen(!open)} class="relative z-10 block p-2 transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </button>
    
        <div x-show={open} 
            
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-100"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
            className={`absolute ${!open && 'hidden'} right-0 z-20 w-72 mt-2 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-900`}
        >
            {buttonLinks.map(({value,func},i)=>{
                return(
                    <a onClick={func} key={i} class="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">{value}</a>
                )
            })}
        </div>
    </div>
</div>


        </div>
     
            {latest.length &&
            latest.map((data,i)=>{
                return (
                    <div key={i} className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-600">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{data.title}</a>
					<p className="text-xs dark:text-gray-600">47 minutes ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">{data.admin.fname} {data.admin.lname}</a>
					</p>
				</div>
                )
            })}
			</div>


			<div className="flex flex-col w-full px-2 space-y-2">
				<div className="flex w-full h-1 bg-opacity-10 bg-violet-600">
					<div className="w-1/2 h-full bg-violet-600"></div>
				</div>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
					<span className="text-xs font-bold tracking-wider mt-3 px-2 uppercase">See more exclusives</span>
					<svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-violet-600">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
    </div>
  )
}

export default ButtonsOfNews