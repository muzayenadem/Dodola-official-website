import React from 'react'
import { IoMdMore } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { BsWindowDock } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";


import { CiEdit } from "react-icons/ci";
import { HiOutlineDuplicate } from "react-icons/hi";
import { MdOutlineUnpublished } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Clicks({isOpen,setIsOpen,setOpenDelete,setOpenPublish,jobId}) {
    const navigate = useNavigate('')
    const clicks = [
        {title:'Calander',icon:<CgCalendarDates/>,func:()=> alert('deletp')},
        {title:'Preview',icon:<MdOutlinePreview/>,func:()=>alert('preview')},
        {title:'Edit',icon:<CiEdit/> , func:()=>{
            navigate(`/admin/update-news/${jobId}`)
        }},
        {title:'Duplicate',icon:<HiOutlineDuplicate/>},
        {title:'Unpublish',icon:<MdOutlineUnpublished/>, func:()=>{
            setIsOpen(false)
            setOpenDelete(false)
            setOpenPublish(true)
        }},
        {title:'Payment and tax',icon:<TbCreditCardPay/>},
        {title:'Delete',icon:<RiDeleteBinLine/>,func:()=> {
            setIsOpen(false)
            setOpenPublish(false)
            setOpenDelete(true)
        }},
       ]
    
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white/80'>
   {/* <div onClick={()=> openHandler(_id)} className="flex text-2xl w-10 h-10 justify-center items-center border-[1px] border-neutral-500 rounded-xl"><IoMdMore/></div> */}      {
                clicks.map((single,i)=>{
                    return (
                        <div key={i} onClick={()=> single.func() } className='w-full h-10 p-3 flex gap-2 text-start dark:hover:bg-white/80 dark:hover:text-gray-900 hover:bg-slate-200'>
                            <span className='text-xl mt-1'>{single.icon}</span>{single.title}
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Clicks