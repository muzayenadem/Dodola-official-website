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
        {title:'History',func:()=>dispatch(filterContentFromServer('History')) & setOpenAbout(false)},
        {title:'Festival',func:()=> dispatch(filterContentFromServer('Festival')) & setOpenAbout(false)},
        {title:'Theme',func:()=>dispatch(filterContentFromServer('Theme')) & setOpenAbout(false)},
        {title:'Religion',func:()=>dispatch(filterContentFromServer('Religion')) & setOpenAbout(false)},
        {title:'Adminstration Team',func:()=>dispatch(filterContentFromServer('Adminstration Team')) & setOpenAbout(false)},
      ]
     const IndustryLinks = [
        {title:'Agriculture',func:()=>dispatch(filterContentFromServer('Agriculture')) & setOpenIndustry(false)},
        {title:'Marketing',func:()=> dispatch(filterContentFromServer('Marketing')) & setOpenIndustry(false)},
        {title:'Industrial Park',func:()=>dispatch(filterContentFromServer('Industrial Park')) & setOpenIndustry(false)},
        {title:'Manufacturing',func:()=>dispatch(filterContentFromServer('Manufacturing')) & setOpenIndustry(false)},
      ]
    const officeLinks = [
        {title:'Mayor Office',func:()=>dispatch(filterContentFromServer('Mayor Office')) & setOpenOffice(false)},
        {title:'Healthy Office',func:()=> dispatch(filterContentFromServer('Healty Office')) & setOpenOffice(false)},
        {title:'Education Office',func:()=>dispatch(filterContentFromServer('Education Office')) & setOpenOffice(false)},
        {title:'Construction Office',func:()=>dispatch(filterContentFromServer('Construction Office')) & setOpenOffice(false)},
        {title:'Human Resourse Office',func:()=>dispatch(filterContentFromServer('Human Resourse Office')) & setOpenOffice(false)},
        {title:'Agriculture Office',func:()=>dispatch(filterContentFromServer('Agriculture Office')) & setOpenOffice(false)},
        {title:'Police Department Office',func:()=>dispatch(filterContentFromServer('Police Department Office')) & setOpenOffice(false)},
      ]
       const educationLinks = [
        {title:'Elemantery',func:()=>dispatch(filterContentFromServer('Elementary')) & setOpenEducation(false)},
        {title:'Secondry School',func:()=> dispatch(filterContentFromServer('Secondry School')) & setOpenEducation(false)},
        {title:'Technical Class',func:()=> dispatch(filterContentFromServer('Thecnical Class')) & setOpenEducation(false)},
        {title:'Depeloma',func:()=> dispatch(filterContentFromServer('Deploma')) & setOpenEducation(false)},
        {title:'Degree',func:()=> dispatch(filterContentFromServer('Degree')) & setOpenEducation(false)},
      ]

    const serviceLink = [
        {title:'Bus Station',func:()=> dispatch(filterContentFromServer('') & setOpenService(false))},
        {title:'Rental Houses',func:()=> dispatch(filterContentFromServer('') & setOpenService(false))},
        {title:'Apartments',func:()=> dispatch(filterContentFromServer('') & setOpenService(false))},
        {title:'Recreation Area',func:()=> dispatch(filterContentFromServer('') & setOpenService(false))},
        {title:'Others',func:()=> dispatch(filterContentFromServer('') & setOpenService(false))},
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
        <div className="relative" >
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
    className="hidden lg:flex items-center rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">All</button>
    
</div>
<div className="relative" data-twe-dropdown-ref>
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
    className=" hidden lg:flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    >
    About
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    className={`absolute z-[1000] float-left m-0 ${!openAbout && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
      {aboutLinks.map(({title,func},i) =>{
        return (
          <li key={i}>
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
<div className="relative" data-twe-dropdown-ref>
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
    className="hidden lg:flex items-center rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
    type="button">
    Industry
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
 <ul
    className={`absolute z-[1000] float-left m-0 ${!openIndustry && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
        {IndustryLinks.map(({title,func},i) =>{
        return (
          <li key={i}>
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
<div className="relative" data-twe-dropdown-ref>
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
    className="hidden lg:flex  items-center rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
>
    Education
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    className={`absolute z-[1000] float-left m-0 ${!openEducation && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
      {educationLinks.map(({title,func},i) =>{
        return (
          <li key={i}>
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
<div className="relative" data-twe-dropdown-ref>
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
    className="hidden lg:flex  items-center rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
    Office
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    className={`absolute z-[1000] float-left m-0 ${!openOffice && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
       {officeLinks.map(({title,func},i) =>{
        return (
          <li key={i}>
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
<div className="relative" data-twe-dropdown-ref>
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
    className="hidden lg:flex  items-center rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
 >
    Servise
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
<ul
    className={`absolute z-[1000] float-left m-0 ${!openService && 'hidden'}  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-gray-900`}
    aria-labelledby="dropdownMenuButton3"
    data-twe-dropdown-menu-ref>
        {serviceLink.map(({title,func},i) =>{
          return (
            <li key={i}>
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
    className="flex items-center rounded bg-purple-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-purple-950 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
    Add <span className='hidden md:block'>Content</span>
  </button>
  </div>
  )
}

export default ContentTopButton
