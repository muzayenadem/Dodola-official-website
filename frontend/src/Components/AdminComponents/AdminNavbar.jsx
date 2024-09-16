import React, { useEffect, useState } from 'react'
import { br1, logo1 } from '../AppComponents/Images/images'
import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { closeAdminSidebarToggle, openAdminSidebarToggle } from '../../Controller/Buttons/ToggleAndminSidebar';

function AdminNavbar() {
    const [theme ,setTheme] = useState(<MdDarkMode/>)
const [isDarkMode, setIsDarkMode] = useState(false);

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
const AdminToggle = useSelector(state => state.AdminToggle.open)

  return (
    <nav  className="relative bg-white shadow border-b-[1px] border-b-neutral-300 dark:bg-gray-800">
    <div className="container  py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                <div onClick={()=> dispatch(openAdminSidebarToggle()) } className={`flex md:hidden bg-white dark:bg-gray-900 dark:text-white/80 flex-col justify-end items-end px-6 py-2 ${AdminToggle && 'hidden'}`}>
                  <span className='text-2xl font-bold'><MdMenu/></span>
                </div>
                <a href="#">
                    <img className="w-auto h-8 sm:h-10" src={logo1} alt=""/>
                </a>
                </div>
                <div className="flex lg:hidden">
                <div className="flex items-center mt-4 lg:mt-0">
                <button onClick={toggleDarkMode} className=" dark:text-white text-gray-900  data-theme-light text-2xl font-bold ml-5">{isDarkMode ? <MdLightMode/> : <MdDarkMode/>}</button>
                    <button className="mx-4 text-gray-600 transition-colors duration-300 transform  dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar"/>
                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 hidden lg:block">Khatab wedaa</h3>
                    </button>
                </div>
                </div>
            </div>

          
            <div  className="absolute inset-x-0 z-20 w-full px-6 hidden py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">

                <div className="flex items-center mt-4 lg:mt-0">
                <button onClick={toggleDarkMode} className=" dark:text-white text-gray-900  data-theme-light text-2xl font-bold ml-5">{isDarkMode ? <MdLightMode/> : <MdDarkMode/>}</button>
                    <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src={br1} className="object-cover w-full h-full" alt="avatar"/>
                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 hidden lg:block">Muzayen Adem</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}

export default AdminNavbar