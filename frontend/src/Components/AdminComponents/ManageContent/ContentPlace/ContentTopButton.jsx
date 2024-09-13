import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// server side renders reducers
import {  filterContentFromServer, reFetchContent } from '../../../../Controller/Data/contentSlice'
import { useNavigate } from 'react-router-dom'
import { TiThSmall } from "react-icons/ti";
import { FaIndustry } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
function ContentTopButton() {
    const [openAbout,setOpenAbout] = useState(false)
    const [openIndustry,setOpenIndustry] = useState(false)
    const [openOffice,setOpenOffice] = useState(false)
    const [openEducation,setOpenEducation] = useState(false)
    const [openService,setOpenService] = useState(false)
    const [openAll,setOpenAll] = useState(false)


    const navigate = useNavigate('')
    const dispatch = useDispatch()
    const allHandler = () =>{
      setOpenAbout(false)
      setOpenEducation(false)
      setOpenIndustry(false)
      setOpenOffice(false)
      setOpenService(false)
      setOpenAll(true)
      dispatch(reFetchContent())
    }

    const contents = useSelector((state => state.content))
    if(contents.loading == true){
      return <div>Loading............</div>
    }
// buttons
    const aboutLinks = [
        {title:'History',func:()=>alert('alerted')},
        {title:'Festival',func:()=> dispatch(filterContentFromServer('Festival')) & setOpenAbout(false)},
        {title:'Theme',func:()=>alert('alerted')},
        {title:'Religion',func:()=>alert('alerted')},
        {title:'Adminstratio Team',func:()=>alert('alerted')},
      ]
     const IndustryLinks = [
        {title:'Agriculture',func:()=>dispatch(filterContentFromServer('Agriculture')) & setOpenIndustry(false)},
        {title:'Maketing',func:()=> dispatch(filterContentFromServer('Festival'))},
        {title:'Industrial Prk',func:()=>alert('alerted')},
        {title:'Manufacturing',func:()=>alert('alerted')},
      ]
    const officeLinks = [
        {title:'Mayor office',func:()=>alert('alerted')},
        {title:'Healthy Office',func:()=> dispatch(filterContentFromServer('Festival')) & setOpenOffice(false)},
        {title:'Education Office',func:()=>alert('alerted')},
        {title:'Construction Office',func:()=>alert('alerted')},
        {title:'Human Resours Office',func:()=>alert('alerted')},
        {title:'Agricultur Office',func:()=>alert('alerted')},
        {title:'Police Department Office',func:()=>alert('alerted')},
      ]
       const educationLinks = [
        {title:'Elemantery',func:()=>alert('alerted')},
        {title:'Secondry School',func:()=> dispatch(filterContentFromServer('Festival'))},
        {title:'Technical Class',func:()=>dispatch(filterContentFromServer('Technical Class'))},
        {title:'Depeloma',func:()=>alert('alerted')},
        {title:'Degree',func:()=>alert('alerted')},
      ]

    const serviceLink = [
        {title:'Bus Station',func:()=>alert('alerted')},
        {title:'Rental Houses',func:()=> dispatch(filterContentFromServer('Festival'))},
        {title:'Apartments',func:()=>alert('alerted')},
        {title:'Recreation Area',func:()=>alert('alerted')},
        {title:'Others',func:()=>alert('alerted')},
      ]
      //funcions
      const aboutHandler = () =>{
        setOpenEducation(false)
        setOpenIndustry(false)
        setOpenOffice(false)
        setOpenAll(false)
        setOpenService(false)
        setOpenAbout(!openAbout)
      }
       const industryHandler = () =>{
        setOpenEducation(false)
        setOpenIndustry(false)
        setOpenOffice(false)
        setOpenService(false)
        setOpenAbout(false)
        setOpenAll(false)
        setOpenIndustry(!openIndustry)
      }
      
       const educationHandler = () =>{
        setOpenIndustry(false)
        setOpenOffice(false)
        setOpenService(false)
        setOpenAll(false)
        setOpenAbout(false)
        setOpenEducation(!openEducation)
      }
      
       const officeHandler = () =>{
        setOpenEducation(false)
        setOpenIndustry(false)
        setOpenService(false)
        setOpenAll(false)
        setOpenAbout(false)
        setOpenOffice(!openOffice)
      }
      
       const serviceHandler = () =>{
        setOpenEducation(false)
        setOpenIndustry(false)
        setOpenOffice(false)
        setOpenAbout(false)
        setOpenAll(false)
        setOpenService(!openService)
      }
      
      
  return (
    <div className="flex justify-between">
    <div className="flex gap-3">
        <div class="relative" >
        <div onClick={allHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80  text-2xl px-[2px]">
            <span
            style={{
              transform: openAll ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
           <TiThSmall/>
        </div>
        <button
        onClick={allHandler}
    class="hidden lg:flex items-center rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">All</button>
    
</div>
<div class="relative" data-twe-dropdown-ref>
  <div onClick={aboutHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80 font-bold text-2xl px-[2px]">
     <span
        style={{
          transform: openAbout ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
      <FaPeopleGroup/>
  </div>
  <button
  onClick={aboutHandler}
    class=" hidden lg:flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    >
    About
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class={`absolute z-[1000] float-left m-0 ${!openAbout && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
      {aboutLinks.map(({title,func},i) =>{
        return (
          <li>
             <a
              onClick={func}
                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-gray-800 dark:text-white/70 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >{title}</a>
          </li>
        )
      })}
  </ul>
</div>
<div class="relative" data-twe-dropdown-ref>
<div onClick={industryHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80 text-2xl px-[2px]">
    <span
        style={{
          transform: openIndustry ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
  <FaIndustry/>
  </div>
  <button
  onClick={industryHandler}
    class="hidden lg:flex items-center rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
    type="button">
    Industry
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
 <ul
    class={`absolute z-[1000] float-left m-0 ${!openIndustry && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
        {IndustryLinks.map(({title,func},i) =>{
        return (
          <li>
             <a
              onClick={func}
              className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-gray-800 dark:text-white/70 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >{title}</a>
          </li>
        )
      })}
  </ul>
</div>
<div class="relative" data-twe-dropdown-ref>
<div onClick={educationHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80 text-2xl px-[2px]">
      <span
        style={{
          transform: openEducation ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
  <FaBookReader/>
  </div>
  <button
  onClick={educationHandler}
    class="hidden lg:flex  items-center rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
>
    Education
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class={`absolute z-[1000] float-left m-0 ${!openEducation && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
      {educationLinks.map(({title,func},i) =>{
        return (
          <li>
             <a
              onClick={func}
               className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-gray-800 dark:text-white/70 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >{title}</a>
          </li>
        )
      })}
  </ul>
</div>
<div class="relative" data-twe-dropdown-ref>
<div onClick={officeHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80 text-2xl px-[2px]">
    <span
        style={{
          transform: openOffice ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
  <HiMiniBuildingOffice2/>
  </div>
  <button
  onClick={officeHandler}
    class="hidden lg:flex  items-center rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
    Office
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class={`absolute z-[1000] float-left m-0 ${!openOffice && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
       {officeLinks.map(({title,func},i) =>{
        return (
          <li>
             <a
              onClick={func}
              className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-gray-800 dark:text-white/70 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >{title}</a>
          </li>
        )
      })}
  </ul>
</div>
<div class="relative" data-twe-dropdown-ref>
<div onClick={serviceHandler} className="lg:hidden justify-center items-center text-indigo-700 dark:text-white/80 text-2xl px-[2px]">
   <span
        style={{
          transform: openService ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -top-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
  <MdHomeRepairService/>
  </div>
  <button
  onClick={serviceHandler}
    class="hidden lg:flex  items-center rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
 >
    Servise
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
<ul
    class={`absolute z-[1000] float-left m-0 ${!openService && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
        {serviceLink.map(({title,func},i) =>{
          return (
            <li>
              <a
                onClick={func}
                 className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-gray-800 dark:text-white/70 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref
                  >{title}</a>
            </li>
          )
        })}
      </ul>
    </div>
    </div>
    <button
        onClick={()=> navigate('/admin/main-post')}
    class="flex items-center rounded bg-purple-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-purple-950 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
    Add <span className='hidden md:block'>Content</span>
  </button>
  </div>
  )
}

export default ContentTopButton
