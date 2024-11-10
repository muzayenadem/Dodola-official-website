
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
import { closeAdminSidebarToggle, openAdminSidebarToggle } from "../../../Controller/Buttons/ToggleAndminSidebar";
import { dodoCity, dodolaCiityOffice, dodolaCity2, holeCity, water, water2 } from "../Images/images";
import { closeHomeSidebarToggle } from "../../../Controller/Buttons/ToggleHomeSidebar";

import { useTranslation } from 'react-i18next'
function HomeSideBar2() {
    const [collapsed, setCollapsed] = useState(false); // Example of managing collapsed state
    const [open,setOpen] = useState(false)
    const [toggled, setToggled] = useState(false); // Example of managing toggled state

 
    const {t} = useTranslation()
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
              className={`h-[100vh] ${HomeToggle == false ? 'hidden lg:block' :'block'} lg:hidden  flex flex-col gap-32 sticky top-0  left-0 md:py-3 `} 
               collapsed={collapsed}
               toggled={toggled}
               breakPoint={''} // Example breakpoint
               rtl={false} // Example RTL setting
               >
                {/* <div onClick={()=> dispatch(closeHomeSidebarToggle())}  className="flex bg-white  dark:bg-gray-900 dark:text-white/80 md:hidden flex-col justify-end items-end px-6 py-2">
                  <span className='text-2xl font-bold'><MdClear/></span>
                </div> */}
                  <div className='flex flex-col justify-end items-end  gap-4 bg-white dark:bg-gray-900 dark:text-white/80'>
                  { !collapsed && <img src={dodoCity}/>}
                    <button className={`${collapsed ?  'px-6 py-2':'px-2'}`}>
                        {
                            !collapsed ?
                            <span onClick={collapseSidebar} className='text-2xl '><FaArrowAltCircleLeft/></span>:
                            <span onClick={collapseSidebar}  className='text-2xl '><FaArrowAltCircleRight/></span>

                        }
                    </button>
                  </div>
                  <div className="relative py-5 px-5  dark:bg-gray-900">
                <span onClick={collapseSidebar} className="absolute inset-y-0 mx-5 left-0 flex items-center  pl-3">
                    <svg className="w-5 h-5 font-bold dark:text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                {!collapsed && <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />}
            </div>
    <Menu className={`bg-white   dark:text-gray-400 dark:bg-gray-950 ${!collapsed ? '' : 'min-h-[78vh]'}`}>
    <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<MdSpaceDashboard/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to=''/>}>{t('home')} </MenuItem>
    <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaArrowDown/> && <FaArrowUp/>} label={t('about')}>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/history'/>}>{t('history')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='festival'/>}>{t('festivals')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='theme'/>}>{t('theme')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())}component={<Link to='feutures'/>}>{t('features')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='bid-post'/>}>{t('adminstrationTeam')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='question'/>}>{t('question')}</MenuItem>
      </SubMenu>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaChartArea/>} label={t('industry')}>
        <MenuItem  onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/industrial-park'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGoogle/>}>{t('industrialPark')}</MenuItem>
        <MenuItem  onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/agriculture'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaQuora/>}>{t('agriculture')}</MenuItem>
        <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/manufacture'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaInstagram/>}>{t('manufucture')}</MenuItem>
        <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/marketing'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaInstagram/>}>{t('marketing')}</MenuItem>
        {
      !collapsed && 
      <div className="p-3 bg-gray-100 rounded-sm py-5 dark:bg-gray-800">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white">Latest news in Dodola!</h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                <img className="object-cover w-full h-32 mt-2 rounded-lg" src={water} alt=""/>
            </div>

    }
      </SubMenu>
      <SubMenu  className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaArrowDown/> && <FaArrowUp/>} label={t('education')}>
      <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/elemantary'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<IoHome/>}>{t('elemantary')}</MenuItem>
      <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/secondary-school'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<IoIosBed/>}>{t('highSchool')}</MenuItem>
      <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/technical-class'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaTiktok/>}>{t('technicalClass')}</MenuItem>
      <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/college'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaReddit/>}>{t('college')}</MenuItem>
      <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/degree'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaReddit/>}>{t('degree')}</MenuItem>
      </SubMenu>
      <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaFacebook/>}>{t('construction')}</MenuItem>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} label={t('services')}>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/hospitals'/>}> {t('hospitals')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/hotels'/>}>{t('hotels')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/others'/>}>{t('banks')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/others'/>}>{t('resorts')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/others'/>}>{t('apartments')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/others'/>}>{t('rentalHouses')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/others'/>}>{t('others')}</MenuItem>
      </SubMenu>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} label={t('offices')}>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGithub/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('heaOffice')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('conOffice')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('helOffice')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('eduOffice')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('culOffice')}</MenuItem>
        <MenuItem className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaLinkedin/>} onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/mayor-office'/>}>{t('humOffice')}</MenuItem>
      </SubMenu>
      <SubMenu className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaChartArea/>} label={t('news')}>
        <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/new-events'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaGoogle/>}>{t('newEvent')}</MenuItem>
        <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/new-jobs'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaQuora/>}>{t('newJob')}</MenuItem>
        <MenuItem onClick={()=> dispatch(closeHomeSidebarToggle())} component={<Link to='/new-jobs'/>} className="bg-white   dark:text-gray-400 dark:bg-gray-900" icon={<FaInstagram/>}>{t('newBid')}</MenuItem>
      </SubMenu>
    </Menu>
    {
      !collapsed && 
      <div className="p-3 bg-gray-100 rounded-sm py-5 dark:bg-gray-800">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white">Latest news in Dodola!</h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                <img className="object-cover w-full h-32 mt-2 rounded-lg" src={water2} alt=""/>
            </div>

    }
    {
      collapsed &&
      <div className='bg-white dark:bg-gray-950 py-2'>
        <img src={dodolaCiityOffice} className="w-full h-16 rounded-lg p-1"/>
      </div>
    }
  </Sidebar>
    </div>
  )
}
export default HomeSideBar2