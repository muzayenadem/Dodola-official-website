import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import Select from 'react-select';
import { removeJobPOstImages, setJobPostImages } from '../../../../Controller/Posts/jobPost';

import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';
import { useNavigate } from 'react-router-dom';
function  JobPost() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [response , setResponse] = useState('')
  const [loading,setLoading] = useState('')
  const [open,setOpen] = useState(false)
  const [errMessage,setErrMessage] = useState('')
  const [errorPage,setErrorPage] = useState(false)
  const [succed,setSucced] = useState(false)
  const [asured, setAsured] = useState(false)
  const [postData,setPostData] = useState({
    category:'',
    title:'',
    description:'',
    salary:'',
    type:'',
    deadline:'',
    requirement:'',
    experience:'',
  })
  const [address,setAdress] = useState({
    streate:'',
    city:'',
    state:'',
    postalCode:'',
  })

  const [company,setCompany] = useState({
    companyName:'',
    companyEmail:'',
    companyPhone:''
  })

  const dispatch = useDispatch()
 
 const navigate = useNavigate('')
    
  const images = useSelector(state => state.jobPost.images)

  console.log({images})

  const selectImages = (e)=>{
    dispatch(setJobPostImages(e.target.files))      
  }

  const changeHandler = value =>{
     setPostData({...postData,category:value.label})
  }
  const exprienceHandler = (value)=>{
    setPostData({...postData,experience:value.label})
  }
  const typeHandler = (value) =>{
    setPostData({...postData,type:value.label})
  }



  const typeList = [
    {value:1,label:'Full Time'},
    {value:2,label:'Part Time'},
    {value:1,label:'Contract'},
  ]

  const exprienceLevel = [
    {label:'0 year',value:1},
    {label:'1 year',value:2},
    {label:'2 year',value:3},
    {label:'3 year',value:4},
    {label:'4 year',value:5},
    {label:'5 year',value:6},
    {label:'6 year',value:7},
  ]
  const data = [
    {value:1,label:' Goverbment & public Adminstration'},
    {value:2,label:'Healthycare'},
    {value:3,label:'Education'},
    {value:4,label:'Construction and infrustructure'},
    {value:5,label:'Information Technology'},
    {value:6,label:'Agriculture',},
    {value:7,label:'Bussiness and Finance'},
    {value:8,label:'Environmental and Natural Resources',},
    {value:9,label:'Social Services'},
    {value:10,label:'Media and Communication'}
]
//console.log({postData,address,campany})
console.log({response})
const submitHundler = async (e) =>{
  e.preventDefault()
  setLoading(true)
  const formData = new FormData()
  formData.append('data',JSON.stringify({postData,address,company}))
  for(let i = 0; i <= images.length; i++){
    formData.append('files',images[i]) 
  }

    try {
        // Replace with your server URL
    
        const response = await axios.post(`${serverLink}/post-job`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true, // This is important for sending credentials
          })
        console.log('Data fetched successfully:', response.data);
        setLoading(false)
        setOpen(false)
        setErrorPage(false)
        setSucced(true)
        
        // You can handle the response here, such as updating state in React
        return response.data;
    
        } catch (error) {
        // Error handling
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with an error:', error.response.data);
          setLoading(false)
          setOpen(false)
          setSucced(false)
          setResponse(error.response.data)
          setErrorPage(true)
          return error.response.data
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          setLoading(false)
          setOpen(false)
          setSucced(false)
          setResponse('response not received')
          setErrorPage(true)
          
          return error.request
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
          setLoading(false)
          setOpen(false)
          setSucced(false)
          setResponse('Error setting up request')
          setErrorPage(true)
          
          return error.message
        }
      }
  }

  const nextHandler =  (e) => {
    e.preventDefault()
    setAsured(true)

    if(postData.title && postData.description && postData.category && postData.deadline && postData.experience
      && postData.requirement && postData.salary && postData.type
      && company.companyName && company.companyEmail && company.companyPhone
      && address.streate && address.city && address.state && address.postalCode && images.length
    ){
      setAsured(false)
      setOpen(true)
    }else{
      setErrMessage('you have to fiil all required place')
    }
  }
  return (
<div className='bg-neutral-50  dark:bg-gray-900 dark:text-white/80 p-6'>


<form  onSubmit={nextHandler}>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white/80">New Job Post</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">This information will be displayed publicly so be careful what you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">	Job Title</label>
 		      <div class="mt-2">
            <input onChange={(e)=> setPostData({...postData,title:e.target.value})} type="text"  autocomplete="given-name" 
            className={`${asured == true & postData.title == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>
        

        <div class="col-span-full lg:col-span-5">
          <label for="about" class="block text-sm font-medium leading-6 dark:text-white/80 text-gray-900">About</label>
          <div class="mt-2">
            <textarea onChange={(e)=> setPostData({...postData,description:e.target.value})}  id="about"  name="about" rows="6" 
            className={` ${asured == true & postData.description == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block p-6 w-full rounded-md border-0 dark:bg-gray-700 dark:text-white/80-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-600 dark:text-white/80 sm:text-sm sm:leading-6`}></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-white/80">Write a few sentences about yourself.</p>
        </div>

{/* 
        //images placeholder */}
      </div>
    </div>


    <div class="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white/80">Company's Condition </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white/80">Use a permanent address where you can receive mail.</p>


      <div className="flex gap-6 flex-col md:flex-row">
    <div className="flex flex-col py-6 gap-2">
    <p class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">	Job Category</p>
    <Select
        className={` ${asured == true & postData.category == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} basic-single dark:text-black dark:bg-gray-900  lg:w-96  justify-center items-center`}
        classNamePrefix="select"
        defaultValue={{value:0,label:'Select Category'}}
        isDisabled={isDisabled}
        isLoading={true}
       onChange={changeHandler}
       isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={data}
      />
    </div>
    <div className="flex flex-col gap-2 py-6">
    <p class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Experience Level</p>
    <Select
        className={` ${asured == true & postData.experience == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} basic-single dark:text-black dark:bg-gray-900  lg:w-96  justify-center items-center`}
        classNamePrefix="select"
        defaultValue={{value:0,label:'Select Exprience'}}
        isDisabled={isDisabled}
        isLoading={true}
       onChange={exprienceHandler}
       isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={exprienceLevel}
      />
    </div>
    <div className="flex flex-col gap-2 py-6">
    <p class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Job Type</p>
    <Select
         className={` ${asured == true & postData.type == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} basic-single dark:text-black dark:bg-gray-900  lg:w-96  justify-center items-center`}
        classNamePrefix="select"
        defaultValue={{value:0,label:'Select Job Type'}}
        isDisabled={isDisabled}
        isLoading={true}
       onChange={typeHandler}
       isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={typeList}
      />
    </div>
      </div>


      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="col-span-full lg:col-span-3">
          <label for="about" class="block text-sm font-medium leading-6 dark:text-white/80 text-gray-900">Job Requirment</label>
          <div class="mt-2">
            <textarea onChange={(e) => setPostData({...postData,requirement:e.target.value})} id="about"  name="about" rows="3" 
            className={` ${asured == true & postData.requirement == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block p-6 w-full rounded-md border-0 dark:bg-gray-700 dark:text-white/80-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-600 dark:text-white/80 sm:text-sm sm:leading-6`}></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-white/80">Write a few sentences about yourself.</p>
        </div>
      </div>

      <div class="w-52">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Salary</label>
 		      <div class="mt-2">
            <input onChange={(e) => setPostData({...postData,salary:e.target.value})} type="text" name="first-name" id="first-name" autocomplete="given-name" 
            className={` ${asured == true & postData.salary == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500  sm:text-sm sm:leading-6`}/>
          </div>
        </div>
        
    </div>



    <div class="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white/80">Company Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white/80">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-6">

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Company Name</label>
          <div class="mt-2">
            <input onChange={(e)=> setCompany({...company,companyName:e.target.value})}  type="text" name="city" id="city" autocomplete="address-level2" 
             className={`${asured == true & company.companyName == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Company Email</label>
          <div class="mt-2">
            <input onChange={(e)=> setCompany({...company,companyEmail:e.target.value})} type="email" name="region" id="region" autocomplete="address-level1" 
             className={`${asured == true & company.companyEmail == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Company Phone</label>
          <div class="mt-2">
            <input onChange={(e)=> setCompany({...company,companyPhone:e.target.value})} type="text" name="postal-code" id="postal-code" autocomplete="postal-code" 
            className={`${asured == true & company.companyPhone == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>
      </div>
    </div>



    <div class="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white/80">Job address</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white/80">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-6">
        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Street address</label>
          <div class="mt-2">
            <input onChange={(e) => setAdress({...address,streate:e.target.value})} type="text" name="street-address" id="street-address" autocomplete="street-address" 
             className={`${asured == true & address.streate == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">City</label>
          <div class="mt-2">
            <input onChange={(e) => setAdress({...address,city:e.target.value})} type="text" name="city" id="city" autocomplete="address-level2" 
            className={`${asured == true & address.city == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">State / Province</label>
          <div class="mt-2">
            <input onChange={(e) => setAdress({...address,state:e.target.value})} type="text" name="region" id="region" autocomplete="address-level1" 
           className={`${asured == true & address.state == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">ZIP / Postal code</label>
          <div class="mt-2">
            <input onChange={(e) => setAdress({...address,postalCode:e.target.value})} type="text" name="postal-code" id="postal-code" autocomplete="postal-code" 
            className={`${asured == true & address.postalCode == '' && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>
      </div>
    </div>




    <div class="col-span-3">
          <label for="cover-photo" class="block text-sm font-medium leading-6 dark:text-white/80 text-gray-900">Cover photo</label>
          <div class={` ${asured == true & !images.length  && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white/80 px-6 py-10 dark:text-white/80 `}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input onChange={selectImages} multiple id="file-upload" name="file-upload" type="file" class="sr-only "/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="container flex justify-start flex-wrap overflow-y-auto mt-6">
                 {images.length > 0 && 
                    images.map((img,i)=>{
                        return (
                            <div key={i} className='relative w-[120px] h-[120px] mb-4 ml-2 '>
                            <div className="flex justify-center items-center p-1 w-6 h-6 absolute top-1 right-1 bg-white rounded-full">
                            <span className='  text-xl font-bold   p-1  text-black rounded-full'  onClick={()=> dispatch(removeJobPOstImages(images.indexOf(img))) & console.log({index:images.indexof(img)})}>&times;</span>
                            </div>
                            <img className='w-[100%] h-[100%] rounded-lg' src={URL.createObjectURL(img)} alt=''/>
                        </div>
                        )
                    })
                 }
                </div>

    <div className='w-52'>
      <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Dead Line</label>

      <input onChange={(e) => setPostData({...postData,deadline:e.target.value})} type="date" placeholder="John Doe" 
      className={` ${asured == true & !postData.deadline && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block  mt-2 w-full placeholder-gray-400/70 dark:text-white/80 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border- blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300`} />
  </div>
    </div>

   {errMessage &&
    <div className="py-3">
    <div class="w-full text-white bg-red-500 rounded-md">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                </path>
            </svg>

                <p class="mx-3">{errMessage}</p>
            </div>

            <button onClick={()=> setErrMessage('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
    </div>
   }


  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button onClick={()=> navigate('/admin/jobs')} type="button" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white/80">Cancel</button>
    <button type="submit"  class="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
  </div>
</form>



<dialog open={open} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<div class="container px-6 py-6 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1>{}</h1>
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Almost Done you just have to click the button bellow</h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">please be sure first that everything is as you want before publish</p>
           {!loading && 
             <div className='flex gap-5 justify-center items-center'>
                <button onClick={()=> setOpen(false)}  class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-600 rounded-lg hover:bg-gray-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Not Sure 
                </button>
                <button onClick={submitHundler}  class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Publish it
                </button>
              </div>
           }
           {loading && <div className="w-16  h-16 mx-auto py-20 mt-12 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>}
        </div>
    </div>
</dialog>

<dialog open={succed} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            CONGRATULATIONS!! your <span class="text-blue-500">New job</span> Content has been succesfully published
        </h2>

        <div class="inline-flex w-full mt-10 sm:w-auto">
            <a href="/admin/jobs" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </a>
        </div>
    </div>
</section>
</dialog>

<dialog open={errorPage} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Something went wrong! <span class="text-blue-500">New job</span> 
        </h2>
        <div class="inline-flex w-full mt-10 sm:w-auto">
            <button onClick={()=>  setLoading(false) & setOpen(false) & setSucced(false) & setErrorPage(false) & setResponse('') }  class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </button>
        </div>
    </div>
</section>
</dialog>

</div>
 )
}

export default JobPost