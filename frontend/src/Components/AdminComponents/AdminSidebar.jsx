
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
import { MdArrowBack, MdArrowForward, MdClear, MdSpaceDashboard } from "react-icons/md";

import { useState } from 'react';


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
       setCollapsed(!true)
      }
  console.log({toggled})
  const responsive = () =>{
    setOpen(true)
  }
  return (
    // <Select 
    // className='w-[98%] ml-[1%] md:hidden mb-2'
    // options={butn2}/>
    <div className={` py-1 md:py-0 sticky md:sticky  top-0 bg-white dark:bg-gray-900 left-0 z-10  `}>
           <div onClick={()=>setOpen(false)} className={`flex md:hidden flex-col justify-end items-end px-6 py-2 ${!open && 'hidden'}`}>
                  <span className='text-2xl font-bold'><MdArrowForward/></span>
                </div>
            <Sidebar  className={`h-[100vh] ${open == true ? 'hidden' :'block'} sticky top-2 bg-white dark:bg-gray-900  left-0 md:py-3 `} 
               collapsed={!collapsed}
               toggled={toggled}
               breakPoint={''} // Example breakpoint
               rtl={false} // Example RTL setting
               >
                <div onClick={()=>setOpen(true)}  className="flex md:hidden flex-col justify-end items-end px-6 py-2">
                  <span className='text-2xl font-bold'><MdClear/></span>
                </div>
                  <div className='flex flex-col justify-end items-end px-6 py-5'>
                    <button>
                        {
                            collapsed ?
                            <span onClick={collapseSidebar} className='text-2xl text-neutral-800'><FaArrowAltCircleLeft/></span>:
                            <span onClick={collapseSidebar}  className='text-2xl text-neutral-800'><FaArrowAltCircleRight/></span>

                        }
                    </button>
                  </div>
    <Menu>
    <MenuItem icon={<MdSpaceDashboard/>} onClick={close} component={<Link to=''/>}> Dashboard </MenuItem>
      <SubMenu icon={<FaArrowDown/> && <FaArrowUp/>} label="Payments">
        <MenuItem icon={<FaGithub/>}> Pie chart </MenuItem>
        <MenuItem icon={<FaLinkedin/>}> Line charts </MenuItem>
      </SubMenu>
      <MenuItem icon={<IoHome/>} onClick={close} component={<Link to='/'/>}>Property </MenuItem>
      <MenuItem icon={<IoIosBed/>}> Listing </MenuItem>
      <MenuItem icon={<FaTiktok/>}> Tiktok </MenuItem>
      <MenuItem icon={<FaReddit/>}> Reddit </MenuItem>
      <MenuItem icon={<FaFacebook/>}> Facebook </MenuItem>
      <SubMenu icon={<FaChartArea/>} label='Fix all'>
      <MenuItem icon={<FaGoogle/>}> Google </MenuItem>
      <MenuItem icon={<FaQuora/>}> Qoura </MenuItem>
      <MenuItem icon={<FaInstagram/>}> Instagram </MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>
    </div>
  )
}
export default AdminSidebar