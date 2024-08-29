
import { IoHome } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { SiCampaignmonitor } from "react-icons/si";
import { Link } from 'react-router-dom';

//practice
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiPasswordLight } from "react-icons/pi";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Sidebar, Menu, MenuItem, SubMenu, } from 'react-pro-sidebar';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

////
import { FaFacebook,FaGoogle,FaYoutube,FaX, FaQuora,FaGithub,FaReddit,FaChartArea,FaTiktok,FaInstagram ,FaArrowDown,FaArrowUp,FaLinkedin} from 'react-icons/fa6';
import { MdArrowBack, MdArrowForward, MdClear, MdMenu, MdSpaceDashboard } from "react-icons/md";

import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { closeAdminSidebarToggle, openAdminSidebarToggle } from "../../Controller/Buttons/ToggleAndminSidebar";
import { dodoCity, dodolaCiityOffice, dodolaCity2, holeCity } from "../Images/images";
import { closeHomeSidebarToggle } from "../../Controller/Buttons/ToggleHomeSidebar";


function HomeSideBar2() {
    const [collapsed, setCollapsed] = useState(false); // Example of managing collapsed state
    const [open,setOpen] = useState(false)
    const [toggled, setToggled] = useState(false); // Example of managing toggled state

 


    const collapseSidebar = () => {
        setCollapsed(!collapsed);
      };
    
      const expandSidebar = () => {
        setCollapsed(false);
      };
    
      const toggleSidebar = () => {
        setToggled(true);
      };
      const close = ()=>{
        setOpen(true)
      }
  console.log({toggled})
  const responsive = () =>{
    setOpen(true)
  }
  const dispatch = useDispatch()
  const HomeToggle = useSelector(state => state.HomeToggle.open)
  return (
    <div className={` py-1 md:py-0 absolute min-h-full flex flex-col  top-0 bg-white dark:bg-gray-900 left-0 z-10  `}>
            <Sidebar
              className={`h-[100vh] ${HomeToggle == false ? 'hidden lg:block' :'block'} lg:hidden  flex flex-col gap-32 sticky top-2 bg-white dark:bg-gray-950 left-0 md:py-3 `} 
               collapsed={collapsed}
               toggled={toggled}
               breakPoint={''} // Example breakpoint
               rtl={false} // Example RTL setting
               >
                {/* <div onClick={()=> dispatch(closeHomeSidebarToggle())}  className="flex bg-white  dark:bg-gray-900 dark:text-white/80 md:hidden flex-col justify-end items-end px-6 py-2">
                  <span className='text-2xl font-bold'><MdClear/></span>
                </div> */}
                  <div className='flex flex-col justify-end items-end  gap-4 bg-white dark:bg-gray-900 dark:text-white/80 py-5'>
                  { !collapsed && <img src={dodoCity}/>}
                    <button className={`${collapsed ?  'px-6':'px-2'}`}>
                        {
                            !collapsed ?
                            <span onClick={collapseSidebar} className='text-2xl '><FaArrowAltCircleLeft/></span>:
                            <span onClick={collapseSidebar}  className='text-2xl '><FaArrowAltCircleRight/></span>

                        }
                    </button>
                  </div>
    <Menu className={`bg-white   dark:text-gray-400 dark:bg-gray-950 ${!collapsed ? '' : 'min-h-[79vh]'}`}>
    <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<MdSpaceDashboard/>} onClick={close} component={<Link to=''/>}>Home </MenuItem>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaArrowDown/> && <FaArrowUp/>} label="Post">
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} onClick={close} component={<Link to='blog-post'/>}>Blog Post</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={close} component={<Link to='job-post'/>}>Job</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={close} component={<Link to='bid-post'/>}>Bid</MenuItem>
      </SubMenu>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<IoHome/>} onClick={close} component={<Link to='/'/>}>Property </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<IoIosBed/>}> Listing </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaTiktok/>}> Tiktok </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaReddit/>}> Reddit </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaFacebook/>}> Facebook </MenuItem>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaChartArea/>} label=' News '>
        <MenuItem  className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGoogle/>}>Moment</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaQuora/>}>Jobs</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaInstagram/>}>Bidding </MenuItem>
      </SubMenu>
    </Menu>
    {
      !collapsed && 
      <div class="p-3 bg-gray-100 rounded-sm py-5 dark:bg-gray-800">
                <h2 class="text-sm font-medium text-gray-800 dark:text-white">Latest news in Dodola!</h2>

                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                <img class="object-cover w-full h-32 mt-2 rounded-lg" src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80" alt=""/>
            </div>

    }
    {
      collapsed &&
      <div class='bg-white dark:bg-gray-950 py-2'>
        <img src={dodolaCiityOffice} class="w-full h-16 rounded-lg p-1"/>
      </div>
    }
  </Sidebar>
    </div>
  )
}
export default HomeSideBar2