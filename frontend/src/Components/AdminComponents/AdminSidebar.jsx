
import { IoHome } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { SiCampaignmonitor } from "react-icons/si";
import { Link } from 'react-router-dom';
//real
import { MdOutlinePostAdd } from "react-icons/md";

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
import { dodoCity, holeCity } from "../AppComponents/Images/images";


function AdminSidebar() {
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
  const AdminToggle = useSelector(state => state.AdminToggle.open)
  return (
    <div className={` py-1 md:py-0 sticky md:sticky min-h-full flex flex-col  top-0 bg-white dark:bg-gray-900 left-0 z-10  `}>
            <Sidebar
              className={`h-[100vh] ${AdminToggle == false ? 'hidden lg:block' :'block'}  flex flex-col gap-32 sticky top-2 bg-white dark:bg-gray-950 min-h-full  left-0 md:py-3 `} 
               collapsed={!collapsed}
               toggled={toggled}
               breakPoint={''} // Example breakpoint
               rtl={false} // Example RTL setting
               >
                <div onClick={()=> dispatch(closeAdminSidebarToggle())}  className="flex bg-white  dark:bg-gray-900 dark:text-white/80 md:hidden flex-col justify-end items-end px-6 py-2">
                  <span className='text-2xl font-bold'><MdClear/></span>
                </div>
                  <div className='flex flex-col justify-end items-end px-6 bg-white dark:bg-gray-900 dark:text-white/80 py-5'>
                    <button>
                        {
                            collapsed ?
                            <span onClick={collapseSidebar} className='text-2xl '><FaArrowAltCircleLeft/></span>:
                            <span onClick={collapseSidebar}  className='text-2xl '><FaArrowAltCircleRight/></span>

                        }
                    </button>
                  </div>
    <Menu className="bg-white   dark:text-gray-400 dark:bg-gray-950 min-h-[70vh]">
    <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<MdSpaceDashboard/>} onClick={close} component={<Link to=''/>}> Dashboard </MenuItem>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaArrowDown/> && <FaArrowUp/>} label="Post">
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} onClick={close} component={<Link to='blog-post'/>}>Blog Post</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={close} component={<Link to='jobs'/>}>Job</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={close} component={<Link to='bid-post'/>}>Bid</MenuItem>
      </SubMenu>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<IoHome/>} onClick={close} component={<Link to='/'/>}>Property </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<MdOutlinePostAdd/>} onClick={close} component={<Link to='content'/>}>Contents</MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaTiktok/>}> Tiktok </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaReddit/>}> Reddit </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaFacebook/>}> Facebook </MenuItem>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaChartArea/>} label='Fix all'>
      <MenuItem  className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGoogle/>}> Google </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaQuora/>}> Qoura </MenuItem>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaInstagram/>}> Instagram </MenuItem>
      </SubMenu>
    </Menu>

    <div className="w-full h-32">
    <img src={dodoCity} className={`${collapsed != false ? 'w-full h-40 ' : ' w-12 h-12 rounded-full'}`}/>
  </div>
  </Sidebar>
    </div>
  )
}
export default AdminSidebar