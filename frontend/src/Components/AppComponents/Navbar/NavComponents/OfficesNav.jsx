import React from 'react'
import { abdu, dodoCity, head, kantiibaa, mother, tilahun } from '../../Images/images'
import { AnimatePresence,motion } from 'framer-motion'
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { filterEmployeeFromServer } from '../../../../Controller/Data/employeeSlice';
import { useDispatch } from 'react-redux';
function OfficesNav({setOffice}){
    return(
        <>
        <AnimatePresence >
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 15 }}
    style={{ translateX: "-50%" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="absolute left-1/2 w-full top-12 bg-white text-black"
  >
    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
    <Navs setOffice={setOffice}/>
  </motion.div>
  </AnimatePresence>
        </>
    )
}

function Navs({setOffice}) {
  const {t} = useTranslation()

  const dispatch = useDispatch()
  const links = [
    {value:'heaOffice',label:'Mayor Office'},
    {value:'conOffice',label:'Construction Office'},
    {value:'eduOffice',label:'Education Office'},
    {value:'helOffice',label:'Health Office'},
    {value:"culOffice",label:"Cultural Office"},
    {value:"humResOffice",label:"Human Resource Office"},
    {value:"infTechOffice",label:'Information Technology Office'},
    {value:"polDepOffice",label:'Police Department Offiec',},
    {value:"busFinOffice",label:'Bussiness and Finance Office'},
    {value:'envOffice',label:'Environmental and Natural Resources Office',},
    {value:"socOffice",label:'Social Services Office'},
    {value:"medComOffice",label:'Media and Communication Office'}
    ]
return (
  <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} onMouseLeave={()=> setOffice(false)} className=" flex py-6 px-10 w-screen bg-white dark:bg-gray-900 dark:text-white/80 ">
   <div className="flex flex-col py-5 px-16 w-[40%]">
      <motion.h2  className=' text-3xl'>Welcom to Dodola Offices service </motion.h2>
      <p className='px-4 py-2'>Select the office that you wanted to contact or visit</p>
        <div className="flex p-6">
          <ul className='underline gap-2 flex flex-col'>
            {
              links.map(({value,label},i)=>{
                return(
                  <Link key={i} onClick={()=> setOffice(false) & dispatch(filterEmployeeFromServer(label))} to={`office/${label}`}><li>{t(value)}</li></Link>
                )
              })
            }
          </ul>
        </div>
     </div>
    <div className="flex w-[60%]">
      <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <img src={kantiibaa}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Obbo Ayyuub Dullee</h2>
            <div className="flex gap-2 items-center">
            <p className='text-[12px]'>The mMayor of Dodola</p>
            |
            <p className='text-[10px]'>Kantiibaa Magaalaa Dodolaa</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <img src={abdu}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Obbo Abdulsalam Hasan</h2>
            <div className="flex gap-2 items-center">
            <p className='text-[12px]'>The Deputy Mayor of Dodola</p>
            |
            <p className='text-[10px]'>Itti Aanaa Kantiibaa Magaalaa <br/>Dodolaa</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <img src={tilahun}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Obbo Kaasahuun Xilahuun</h2>
            <div className="flex gap-2 items-center capitalize">
            <p className='text-[12px] '>head of the office of prosperity part in dodola</p>
            |
            <p className='text-[10px]'>Itti gaafatamaa waajjira paartii badhaadhinnamagaalaa Dodolaa</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <img src={head}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Hasan Obsee</h2>
            <p className='text-[12px]'> Dodola city head office manager</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <img src={mother}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Hasan Obsee</h2>
            <p className='text-[12px]'> Dodola city head office manager</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <img src={head}  className='w-72 h-52 rounded-md'/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
            <span><HiOutlinePhoneOutgoing/></span>
            <p>+251 936591302</p>
            </div>
            <div className="flex gap-2 flex-col ">
            <h2>Hasan Obsee</h2>
            <p className='text-[12px]'> Dodola city head office manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default OfficesNav