import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import SliderImage from "../Home/SliderImage";
import { logo1 } from "../Images/images";
import NewPost from "../AdminComponents/PostComponents/NewPost/NewPost";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion, useDragControls } from "framer-motion"
import { closeHomeSidebarToggle, openHomeSidebarToggle } from "../../Controller/Buttons/ToggleHomeSidebar";
import { ShiftingDropDown } from "../Home/Sample";
import Example from "../Home/Sample2";
import AboutsNav from "./NavComponents/AboutsNav";
import IndustryNav from "./NavComponents/IndustryNav";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import OfficesNav from "./NavComponents/OfficesNav";
function Navbar() {
  const [about,setAbout] = useState(false)
  const [industry, setIndustry] = useState(false)
  const [office,setOffice] = useState(false)



  const [theme ,setTheme] = useState(<MdDarkMode/>)
  const [isOpen,setIsOpen] = useState(false)
  const [me,setMe] = useState('data-twe-carousel-active')
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(()=>{
    setMe('data-twe-carousel-active')
  },[])

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  const dispatch = useDispatch()
 const HomeToggle = useSelector(state=> state.HomeToggle.open)
 const controls = useDragControls()

 function startDrag(event) {
   controls.start(event)
 }


 const openAbout = () => {
  setIndustry(false)
  setOffice(false)
  setAbout(true)
 }
 const openIndustry = () => {
  setIndustry(true)
  setOffice(false)
  setAbout(false)
 }
 
 const openOffice = () => {
  setIndustry(false)
  setOffice(true)
  setAbout(false)
 }
 
 
  return (
    <>
    <section className="bg-white w-screen  dark:bg-gray-900">
    <nav x-data={{ isOpen: false }} className="container py-3 px-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-8 rounded-md sm:h-10" src={logo1} alt=""/>
            </a>

        
            <div className="flex lg:hidden gap-2">
                <button onClick={toggleDarkMode} className=" dark:text-white text-gray-900  data-theme-light text-2xl font-bold ml-5">{isDarkMode ? <MdDarkMode/> : <MdLightMode/> }</button>
                <button  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  {!HomeToggle && 
                        <sspan onClick={()=> dispatch(openHomeSidebarToggle())}  className="w-6 text-3xl font-bold h-6" strokeWidth="2">
                          <MdMenu/>
                    </sspan>
                  }
                  {HomeToggle &&
                   <svg onClick={()=> dispatch(closeHomeSidebarToggle())}  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
                  }
                </button>  
            </div>
        </div>

       
        <div  className={`${isOpen ? 'translate-x-0 opacity-100 h-[100vh] ':'opacity-0 -translate-x-full '}absolute inset-x-0 z-20 w-full px-6   py-4  transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
            <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
            <a a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                <a onMouseEnter={openAbout} className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">
                  <span className=" flex gap-1 items-center ">About   <span className="text-xl"><MdOutlineKeyboardArrowDown/></span> </span>
                  <span
                    style={{
                      transform: about ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                  />
                </a>
                   <a onMouseEnter={openIndustry}  className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">
                <span className=" flex gap-1 items-center ">Industry<span className="text-xl"><MdOutlineKeyboardArrowDown/></span> </span>
                  <span
                    style={{
                      transform: industry ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                  />
                </a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Education</a>
                <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Constructions</a>
                <a onMouseEnter={openOffice} className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">
                <span className=" flex gap-1 items-center ">Offices<span className="text-xl"><MdOutlineKeyboardArrowDown/></span> </span>
                  <span
                    style={{
                      transform: office ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                  />
                  </a>
            </div>

            <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                See News
            </a>
            <button onClick={toggleDarkMode} className=" border-[1px] bg-gray-500 dark:bg-slate-700 border-gray-700 dark:border-neutral-200 w-10 h-10 items-center lg:flex rounded-full justify-center  dark:text-white hidden  text-gray-900  data-theme-light text-2xl font-bold ml-5">{isDarkMode ? <MdDarkMode/>: <MdLightMode/> }</button>
        </div>
    </nav>
</section>
{industry && <IndustryNav setIndustry={setIndustry}/>}
{about && <AboutsNav setAbout={setAbout} />}
{office && <OfficesNav setOffice={setOffice}/>}

 
</>
  )
}

export default Navbar