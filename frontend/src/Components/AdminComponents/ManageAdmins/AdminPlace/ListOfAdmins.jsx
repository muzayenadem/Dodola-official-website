import React, { useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import ContentPages from '../../ManageContent/ContentPlace/ContentPages';
import DeletePopUp from '../../PopUps/DeletePopUp';
import UnPuplishPopUp from '../../PopUps/UnPuplishPopUp';
import axios from 'axios';
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Click from './Click';
function ListOfAdmins({employee,data}) {
    const [openDelete,setOpenDelete] = useState(false)
    const [openPublish,setOpenPublish] = useState(false)
    const [openId,setOpenId] = useState('') 
    const [errMessage,setErrMessage] = useState('')
    const [suspensio_loading , setSuspension_loading] = useState(false)
    const [succeed,setSucceed] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const {employeeId} = useParams()
    const navigate = useNavigate('')
    const openHandler = (id) =>{
        if(id  & id != openId){
            setIsOpen(false)
            setIsOpen(true)
            setOpenId(id)
        } else{
            setOpenId(id)
            setIsOpen(!isOpen)
        }
       }

       const dispatch = useDispatch()

       const deleteHandler = async () =>{
        try {
            const response = await axios.delete(`${serverLink}/delete-admin/${openId}`)
            if(response.data){
                setOpenDelete(false)
                //dispatch(reFetchEmployee)
                window.location.href = '/admin/admins'
            }
        } catch (error) {
            if(error.response.data){
                console.log('error respone data : ', error.response.data)
                return error.response.data
            }
            if(error.request){
                console.log('request error : ',error.request)
                return error.request
            }
            if(error.message){
                console.log('error message : ', error.message)
                return error.message
            }
        } 
      }

    
      const unPublishHandler = async () =>{
        setSuspension_loading(true)
        try {
            const res = await axios.put(`${serverLink}/update/suspend-admin/${openId}`)
            setSucceed(res.data)
        } catch (error) {
            setErrMessage(error.message)
        } finally{
            setSuspension_loading(false)
        }
      }
      if(!data.data.length & data.loading == false){
        return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>there is no data </div>
      }
    
  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white/80'>
        <div className="flex justify-between p-3 gap-6 border-b-[2px] dark:border-b-neutral-700">
            <div className="flex w-[8%]">Admins</div>
            <div className="hidden md:flex w-[20%]">Role</div>
            <div className="hidden md:flex w-[30%]">Name</div>
            <div className="hidden md:flex w-[40%]">Contacts</div>
            <button className="flex focus:outline-none w-[10%] font-body text-xl text-blue-700 justify-end items-center px-6">Edit</button>
        </div>
        {employee?.map(({fname,lname,email,phone,suspended,profileImg,role,_id},i) =>{
             const {eventManager,jobsManager,contentManager,responseManager,biddingManager,generalManager} = role
            return (
                <div key={i} className='bg-white border-b-[1px] h-24 border-b-neutral-300 dark:border-b-neutral-700 dark:bg-gray-900 p-3 dark:text-white/80'>
                    <div className="flex justify-between gap-3 w-full">
                        <div className="flex w-[30%] md:w-[8%]">
                         <img src={profileImg} className='w-16 h-16 rounded-lg '/>
                        </div>
                        <div className=" w-[40%] hidden  md:flex-row md:w-[20%] md:flex   items-center">
                            <p className='text-blue-800'>{fname} {lname}</p>
                        </div>
                        <div className="hidden md:flex w-[30%] items-center ">
                            {eventManager  && !generalManager && <p>Event Manager</p>}
                            {jobsManager && !generalManager &&<p>Jobs Manager</p>}
                            {contentManager && !generalManager &&<p>Content Manager</p>}
                            {biddingManager && !generalManager &&<p>Bidding Manager</p>}
                            {responseManager &&!generalManager && <p>Response Manager</p>}
                            {generalManager &&<p>General Manager</p>}
                        </div>
                        <div className="hidden md:flex w-[40%]  items-center">
                            <div className="-gap-5">
                                <p>{email}</p>
                                <p>0{phone}</p>
                            </div>
                        </div>
                        <div className=" hidden md:flex w-[10%] justify-end items-center px-6 relative">
                            <button onClick={()=> openHandler(_id)} className=' text-xl w-10 h-10 rounded-lg text-center flex justify-center hover:bg-slate-200 dark:hover:bg-gray-700 items-center shadow-md dark:shadow-neutral-400 focus:outline-none'><CiMenuKebab/></button>
                            <div onMouseLeave={()=> setIsOpen(false)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10 -bottom-7 right-12 py-3 dark:bg-gray-900   w-48  bg-white ${isOpen == true & _id == openId  ? '':'hidden'} `}>
                                 <Click
                                 isOpen={isOpen} 
                                 setIsOpen={setIsOpen} 
                                 setOpenDelete={setOpenDelete}
                                 setOpenPublish={setOpenPublish}
                                 adminId={_id}
                                 admin={{fname,lname,email,phone,suspended,profileImg,role,_id}}
                                 />
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col  w-[90%]">
                            <div className="flex w-full gap-3">
                                <div className="flex w-[90%] flex-col items-center">
                                    <p className='text-blue-800'>{fname} {lname}</p>
                                </div>
                                <div className=" flex w-[5%] justify-end items-top relative md:px-6">
                                     <button onClick={()=> openHandler(_id)} className=' text-xl  text-center flex justify-center items-center focus:outline-none'><CiMenuKebab/></button>
                                     <div onMouseLeave={()=> setIsOpen(false)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10b -bottom-14 right-12 py-3 dark:bg-gray-900   w-48  bg-white ${isOpen == true & _id == openId  ? '':'hidden'} `}>
                                        <Click
                                        isOpen={isOpen} 
                                        setIsOpen={setIsOpen} 
                                        setOpenDelete={setOpenDelete} 
                                        setOpenPublish={setOpenPublish}
                                        adminId={_id}
                                        />
                                    </div>
                                </div>
                            </div>
                                {eventManager  && !generalManager && <p>Event Manager</p>}
                                {jobsManager && !generalManager &&<p>Jobs Manager</p>}
                                {contentManager && !generalManager &&<p>Content Manager</p>}
                                {biddingManager && !generalManager &&<p>Bidding Manager</p>}
                                {responseManager &&!generalManager && <p>Response Manager</p>}
                                {generalManager &&<p>General Manager</p>}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    {employee.length >= 3 && <ContentPages/>}
        <dialog open={openDelete}>
        <DeletePopUp 
            openDelete={setOpenDelete} 
            type={'Admin'}
            title={'Are you certain you want to remove this job?'}
            description={"Once the job is deleted, it cannot be republished. If you later decided you want to make it available again, you'll need to recreate the job content from scratch. As an alternative, you can update your calendar's availability to reflect any changes."}
            deleteHandler={deleteHandler}
            />
        </dialog>
        <dialog open={openPublish}>
        <UnPuplishPopUp 
            setOpenPublish={setOpenPublish}
            type={'Job'}
            title={'Are you certain that you want to suspend this admin?'}
            description={"But you can remove suspenssion time from this admin when ever you want "}
            unPublishHandler={unPublishHandler}
            button={suspensio_loading ? 'updating' : 'suspend'}
            />
        </dialog>
    </>
  )
}

export default ListOfAdmins