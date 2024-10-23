import React from 'react'
import adminData from '../../../ComponentsData/adminData'
import { br1 } from '../../../AppComponents/Images/images'
import { useNavigate } from 'react-router-dom'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlinePreview, MdOutlineUnpublished } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { TbCreditCardPay } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'

function AdminProfile({setOpen}) {

  const {admin,role} = adminData()
  console.log({admin})
  const {eventManager,jobsManager,contentManager,responseManager,biddingManager,generalManager} = role
  const navigate = useNavigate('')
  const clicks = [
    {title:'Calander',icon:<CgCalendarDates/>,func:()=> alert('deletp')},
    {title:'Porfile',icon:<CiEdit/> , func:()=> setOpen(false) & navigate('/admin/edit-profile') },
    {title:'Payment and tax',icon:<TbCreditCardPay/> , func:()=> alert('payment sysytem')},
    {title:'Logout',icon:<RiDeleteBinLine/>,func:()=>alert('wow')},
   ]
  return (
    <div className="flex flex-col">

      <div className='border-b-[1px] flex justify-between p-5 border-b-neutral-200 dark:border-b-neutral-700'>
          <h3 className="mx-2 items-center self-center text-gray-700 dark:text-gray-200 ">{admin.fname} {admin.lname}</h3>
          <div className="w-12 h-12 overflow-hidden border-2 border-gray-400 rounded-full">
              <img src={br1} className="object-cover w-full h-full" alt="avatar"/>
          </div>
      </div>


      <div className="flex border-b-[1px] border-b-neutral-200 dark:border-b-neutral-700 ">
        <div className="p-5 px-10 ">
          <p className='text-xl font-bold text-center pb-5 text-blue-600'>The admin role you have</p>
          {eventManager  && !generalManager && <p>Event Manager</p>}
          {jobsManager && !generalManager &&<p>Jobs Manager</p>}
          {contentManager && !generalManager &&<p>Content Manager</p>}
          {biddingManager && !generalManager &&<p>Bidding Manager</p>}
          {responseManager &&!generalManager && <p>Response Manager</p>}
          {generalManager &&<p>General Manager</p>}
        </div>
      </div>


      <div className='bg-white dark:bg-gray-950 dark:text-white/80 pb-6'>
         {clicks.map((single,i)=>{
            return (
                <div key={i} onClick={()=> single.func() } className='w-full h-10 p-3 flex gap-3 text-start dark:hover:bg-white/80 dark:hover:text-gray-900 hover:bg-slate-200'>
                    <span className='text-xl mt-1'>{single.icon}</span>{single.title}
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default AdminProfile