import React, { useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import Clicks from './Clicks';
import ContentPages from './ContentPages';
import DeletePopUp from '../../PopUps/DeletePopUp';
import UnPuplishPopUp from '../../PopUps/UnPuplishPopUp';
import axios from 'axios';
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';

function ListOfContent({contents,data}) {
    const [openDelete,setOpenDelete] = useState(false)
    const [openPublish,setOpenPublish] = useState(false)
    const [openId,setOpenId] = useState('') 
    const [isOpen, setIsOpen] = useState(false)
    const openHandler = (id) =>{
        if(id  & id != openId){
            setIsOpen(false)
            setIsOpen(true)
            setIsOpen(id)
        } else{
            setOpenId(id)
            setIsOpen(!isOpen)
        }
       }
  const deleteHandler = async () =>{
    try {
        const response = await axios.post(`${serverLink}/delete-content`,{id:openId})

        if(response.data){
            setOpenDelete(false)
            window.location.href = 'http://localhost:5173/admin/content'
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
        if(error.message)
            console.log('error message : ', error.message)
            return error.message
    } 
  }
  const unPublishHandler = () =>{
    alert('Un Publish handler')
  }
  if(!data.data.length & data.loading == false){
    return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>there is no data </div>
  }

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white/80'>
        <div className="flex justify-between p-3 gap-6 border-b-[2px] dark:border-b-neutral-700">
            <div className="flex w-[8%]">Content</div>
            <div className="hidden md:flex w-[20%]">Category</div>
            <div className="hidden md:flex w-[30%]">Title</div>
            <div className="hidden md:flex w-[40%]">Descriptio</div>
            <button className="flex focus:outline-none w-[10%] font-body text-xl text-blue-700 justify-end items-center px-6">Edit</button>
        </div>
        {contents.map((data,i) =>{
            return (
                <div key={i} className='bg-white border-b-[1px] h-24 border-b-neutral-300 dark:border-b-neutral-700 dark:bg-gray-900 p-3 dark:text-white/80'>
                    <div className="flex justify-between gap-3 w-full">
                        <div className="flex w-[30%] md:w-[8%]">
                         <img src={data.images[0]} className='w-16 h-16 rounded-lg '/>
                        </div>
                        <div className=" w-[40%] hidden  md:flex-row md:w-[20%] md:flex   items-center">
                            <p className='text-blue-800'>{data.category}/-{data.subCategory}</p>
                        </div>
                        <div className="hidden md:flex w-[30%] items-center ">
                            <p>{data.title}</p>
                        </div>
                        <div className="hidden md:flex w-[40%]  items-center">
                        <p>{data.description.slice(0,80)}........</p>
                        </div>
                        <div className=" hidden md:flex w-[10%] justify-end items-center px-6 relative">
                            <button onClick={()=> openHandler(data._id)} className=' text-xl w-10 h-10 rounded-lg text-center flex justify-center hover:bg-slate-200 dark:hover:bg-gray-700 items-center shadow-md dark:shadow-neutral-400 focus:outline-none'><CiMenuKebab/></button>
                            <div onMouseLeave={()=> setIsOpen(false)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10 -bottom-7 right-12 py-3 dark:bg-gray-900   w-48  bg-white ${isOpen == true & data._id == openId  ? '':'hidden'} `}>
                                 <Clicks 
                                 isOpen={isOpen} 
                                 setIsOpen={setIsOpen} 
                                 setOpenDelete={setOpenDelete}
                                 setOpenPublish={setOpenPublish}
                                 contentId={data._id}
                                 />
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col  w-[90%]">
                            <div className="flex w-full gap-3">
                                <div className="flex w-[90%] flex-col items-center">
                                    <p className='text-blue-800'>{data.category}/-{data.subCategory}</p>
                                </div>
                                <div className=" flex w-[5%] justify-end items-top relative md:px-6">
                                     <button onClick={()=> openHandler(data._id)} className=' text-xl  text-center flex justify-center items-center focus:outline-none'><CiMenuKebab/></button>
                                     <div onMouseLeave={()=> setIsOpen(false)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10b -bottom-14 right-12 py-3 dark:bg-gray-900   w-48  bg-white ${isOpen == true & data._id == openId  ? '':'hidden'} `}>
                                        <Clicks 
                                        isOpen={isOpen} 
                                        setIsOpen={setIsOpen} 
                                        setOpenDelete={setOpenDelete} 
                                        setOpenPublish={setOpenPublish}
                                        contentId={data._id}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className=' text-[12px]'>{data.title}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
     {contents.length >= 3 && <ContentPages/>}
        <dialog open={openDelete}>
            <DeletePopUp 
            openDelete={setOpenDelete} 
            type={'Content'}
            title={'Are you certain you want to remove this content?'}
            description={"Once the content is deleted, it cannot be republished. If you later decided you want to make it available again, you'll need to recreate the content from scratch. As an alternative, you can update your calendar's availability to reflect any changes."}
            deleteHandler={deleteHandler}
            />
        </dialog>
        <dialog open={openPublish}>
            <UnPuplishPopUp 
            setOpenPublish={setOpenPublish}
            type={'Content'}
            title={'Are you certain you want to unpublish this content?'}
            description={"Do you want to view out this content for the next period? Then all you have to do is change the availability."}
            unPublishHandler={unPublishHandler}
            />
        </dialog>
    </>
  )
}



export default ListOfContent