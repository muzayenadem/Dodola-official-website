import React, { useState } from 'react'
import {MdClear} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { filterJobsFromServer, reFetchJobs, searchJobs } from '../../../../Controller/Data/jobsSlce'
function ButtonsOfJobs() {
    const [value,setValue] = useState('')
    const [open,setOpen] = useState(false)
    const dispatch = useDispatch()
    const searchHandler = () =>{
        dispatch(searchJobs(value))
        setOpen(false)
    }
    console.log({value})
    const buttonLinks = [
        {value:'All Category',func:()=> dispatch(reFetchJobs()) & setOpen(false)},
        {value:'Goverbment & public Adminstration',func: ()=> dispatch(filterJobsFromServer('Goverbment & public Adminstration')) & setOpen(false)},
        {value:'Healthycare',func: ()=> dispatch(filterJobsFromServer('Healthycare')) & setOpen(false)},
        {value:'Education',func: ()=> dispatch(filterJobsFromServer('Education')) & setOpen(false)},
        {value:'Construction and infrustructure',func: ()=> dispatch(filterJobsFromServer('Construction and infrustructure')) & setOpen(false)},
        {value:'Information Technology',func: ()=> dispatch(filterJobsFromServer('Information Technology')) & setOpen(false)},
        {value:'Agriculture',func: ()=> dispatch(filterJobsFromServer('Agriculture')) & setOpen(false)},
        {value:'Bussiness and Finance',func: ()=> dispatch(filterJobsFromServer('Bussiness and Finance')) & setOpen(false)},
        {value:'Environmental and Natural Resources',func: ()=> dispatch(filterJobsFromServer('Environmental and Natural Resources')) & setOpen(false)},
        {value:'Social Services',func: ()=> dispatch(filterJobsFromServer('Social Services')) & setOpen(false)},
        {value:'Media and Communication',func: ()=> dispatch(filterJobsFromServer('Media and Communication')) & setOpen(false)}
    ]
  return (
    <>
    <section className='p-4'>
        <div className="flex gap-2">
        <div className="w-[88%] md:w-[100%]">
            <input  
            type='search'
            onChange={(e)=> setValue(e.target.value)}
            onInput={searchHandler}
            placeholder='search here '
            className='px-4 w-full border-[1px] border-neutral-300 dark:border-neutral-600 rounded-lg py-2 focus:outline-none  dark:bg-gray-800'/>
        </div>
        <div onClick={()=> setOpen(true)} className="md:hidden text-2xl px-2 font-bold">...</div>
        </div>
        <div className="px-4 py-7 hidden md:block ">
            <ul className='dark:bg-slate-800 underline gap-3 flex flex-col '>
                {buttonLinks.map(({value,func},i)=>{
                    return (
                        <div onClick={func} key={i} >
                            <li className=' hover:text-blue-600'>{value}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    </section>
    <dialog open={open} className='absolute w-screen h-[110vh] bg-white  md:hidden  dark:bg-gray-800 dark:text-white/80'>
    <div className="flex justify-end items-end">
        <button onClick={()=> setOpen(false)} className='text-2xl font-bold px-8 py-1'><MdClear/></button>
    </div>
    <div className="px-4 py-7">
            <ul className='dark:bg-slate-800 underline gap-3 flex flex-col '>
                {buttonLinks.map(({value,func},i)=>{
                    return (
                        <div onClick={func} key={i} >
                            <li className=' hover:text-blue-600'>{value}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    </dialog>
    </>
  )
}

export default ButtonsOfJobs