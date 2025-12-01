import React, { useEffect, useState } from 'react'
import { br1, logo1 } from '../AppComponents/Images/images'
import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { closeAdminSidebarToggle, openAdminSidebarToggle } from '../../Controller/Buttons/ToggleAndminSidebar';
import { openHomeSidebarToggle } from '../../Controller/Buttons/ToggleHomeSidebar';
import AdminProfile from './Admin/AdminProfile/AdminProfile';

function AdminNavbar({admin}) {
    const [theme ,setTheme] = useState(<MdDarkMode/>)
    const [isDarkMode, setIsDarkMode] = useState(!false);
    const [open,setOpen] = useState(false)
    
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

const thisAdmin = admin.reduce(()=> admin)
console.log({thisAdmin})

const dispatch = useDispatch()
const AdminToggle = useSelector(state => state.AdminToggle.open)

  return (
    <>
     <nav className='w-full  px-4 h-14 bg-white dark:bg-gray-950 '>
        <div className=" container mx-auto flex justify-between items-center">
        <div className="">
        <div className="flex mt-2 items-center justify-center">
                <a href="#">
                    <img className="w-auto h-8 sm:h-10" src={logo1} alt=""/>
                </a>
          
            </div>
        </div>

        <div className="">
        <div className="flex items-center justify-center  lg:mt-0">
                <button onClick={toggleDarkMode} className=" dark:text-white text-gray-900  data-theme-light text-2xl font-bold ml-5">{isDarkMode ? <MdLightMode/> : <MdDarkMode/>}</button>
                    <button className=" mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                   <div className="flex gap-20 relative ">
                   <button onClick={()=> setOpen(!open)} type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src={thisAdmin?.profileImg ? thisAdmin.profileImg : br1} className="object-cover w-full h-full" alt="avatar"/>
                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 hidden lg:block">{thisAdmin?.fname} {thisAdmin?.lname}</h3>
                    </button> 
                    <button  type="button" className=" lg:hidden ml-4 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        {!AdminToggle && 
                                <span onClick={()=> dispatch(openAdminSidebarToggle())}  className="w-6 text-3xl font-bold h-6" strokeWidth="2">
                                <MdMenu/>
                            </span>
                        }
                        {AdminToggle &&
                        <svg onClick={()=> dispatch(closeAdminSidebarToggle())}  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                        }
                    </button> 

                    <div className={`${!open && 'hidden'} top-16  absolute  w-[200%]  -left-36   shadow-md bg-white dark:bg-gray-950  `}>
                      <div className=" absolute -top-2 bg-white  dark:bg-gray-950 w-5 h-5 rotate-45 left-[47%]   "></div>
                        <div className="">
                          <AdminProfile admin={admin} setOpen={setOpen}/>
                        </div>
                    </div>
                   </div>
                </div>
        </div>
        </div>
     </nav>
</>
  )
}

export default AdminNavbar