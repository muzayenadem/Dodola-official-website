import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Data from '../../../ComponentsData/employeeData';
import Select from 'react-select';
import { removeJobPOstImages, setJobPostImages } from '../../../../Controller/Posts/jobPost';

import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleEmployee, removeEmployeeImages, setEmployeeImages } from '../../../../Controller/Data/employeeSlice';
import { useEffect } from 'react';
import NoData from '../../../ErrorPages/NoData';
function  UpdateEmloyee() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [response , setResponse] = useState('')
  const [loading,setLoading] = useState('')
  const [open,setOpen] = useState(false)
  const [errMessage,setErrMessage] = useState('')
  const [err,setErr] = useState('')
  const [errorPage,setErrorPage] = useState(false)
  const [succed,setSucced] = useState(false)
  const [asured, setAsured] = useState(false)
  const [files,setFiles] = useState([])
  const [postData,setPostData] = useState({
    office:'',
    category:'',
    title:'',
    detail:'',
    date:'',
    employeeName:'',
    employeeEmail:'',
    employeePhone:''
  })
 
  const { employeeId } = useParams()
      console.log({postData})
     const dispatch = useDispatch()
     useEffect(() => {
        console.log('Fetching news for ID to update:', employeeId);
        dispatch(fetchSingleEmployee(employeeId));
    }, [employeeId, dispatch]);
 
    const allData = Data()
 

    let detail = allData.single
    console.log({detail,allData})


    const obj = detail.reduce((accumulator, current) => {
    // Merge the properties of the current object into the accumulator.
    return { ...accumulator, ...current };
    }, {});

    console.log({obj})

 const navigate = useNavigate('')
    
  const images = useSelector(state => state.jobPost.images)

  console.log({images})

  const changeHandler = value =>{
     setPostData({...postData,category:value.label})
  }   
 const officeChange = value =>{
   setPostData({...postData,office:value.label})
 }

 const selectImages = (e)=>{
     dispatch(setEmployeeImages(e.target.files))      
   }
 const deletePhoto = (deletedUrl) => {
     dispatch(removeEmployeeImages(deletedUrl));
 };
   useEffect(()=>{
       setFiles(obj.images)
   },[detail])
  const data = [
    {value:1,label:'Goverbment & public Adminstration'},
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
const officeData = [
  {value:1,label:'Mayor Office'},
  {value:2,label:'Construction Office'},
  {value:3,label:'Education Office'},
  {value:4,label:'Health Office'},
  {value:5,label:"Cultural Office"},
  {value:6,label:"Human Resource Office"},
  {value:7,label:'Information Technology Office'},
  {value:8,label:'Police Department Offiec',},
  {value:9,label:'Bussiness and Finance Office'},
  {value:10,label:'Environmental and Natural Resources Office',},
  {value:11,label:'Social Services Office'},
  {value:12,label:'Media and Communication Office'}
]
//console.log({postData,address,campany})
console.log({response})
const submitHundler = async (e) =>{
  e.preventDefault()
  setLoading(true)
 let oldFiles = []
    for( let i = 0; i <= files.length ; i++){
      if(typeof files[i] === 'string'){
        if (files[i] != files[i-1]) oldFiles = [...oldFiles,files[i]]
      }
    }
  console.log({oldFiles,files})

  const updatedEmployeeData = {
    office:  postData.office ? postData.office : obj?.office,
    category : postData.category ? postData.category : obj?.category,
    title: postData.title ? postData.title : obj?.title,
    detail: postData.detail ? postData.detail : obj?.detail,
    date: postData.date ? postData.date : obj?.date,
    fullName: postData.employeeName ? postData.employeeName : obj?.fullName,
    email: postData.employeeEmail ? postData.employeeEmail : obj?.email,
    phone: postData.employeePhone ? postData.employeePhone : obj?.phone,
    files : oldFiles
  }

  const formData = new FormData()
  formData.append('data',JSON.stringify({updatedEmployeeData}))
  for(let i = 0; i <= files.length; i++){
    formData.append('files',files[i]) 
  }

    try {
        // Replace with your server URL
    
        const response = await axios.put(`${serverLink}/update/employee/${employeeId}`, formData, {
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
          setErr(error.response.data)
          setErrorPage(true)
          return error.response.data
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          setLoading(false)
          setOpen(false)
          setSucced(false)
          setResponse('response not received')
          setErr('No response resivied')
          setErrorPage(true)
          
          return error.request
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
          setLoading(false)
          setOpen(false)
          setSucced(false)
          setResponse('Error setting up request')
          setErr(error.message)
          setErrorPage(true)
          
          return error.message
        }
      }
  }

  const nextHandler =  (e) => {
    e.preventDefault()
    setAsured(true)

    if(
      postData.title || obj.title && postData.detail || obj.detail && postData.category || obj.category && 
      postData.date || obj.date && postData.office || obj.office&& postData.employeeName || obj.fullName && 
      postData.employeeEmail || obj.email && postData.employeePhone || obj.phone && files.length
    ){
      setAsured(false)
      setOpen(true)
    }else{
      setErrMessage('you have to fiil all required place')
    }
  }

  if(allData.singleLoading){
      return (
        <div className="flex items-center  justify-center px-32 py-60 dark:bg-gray-900  md:p-32 md:py-60 min-h-[65vh] space-x-2">
        <div className="w-4 h-4 rounded-full animate-spin px-5 bg-violet-800"></div>
        <div className="w-3.5 h-3.5 rounded-full animate-spin px-4 bg-violet-700"></div>
        <div className="w-3 h-3 rounded-full animate-spin px-3 bg-violet-600"></div>
        <div className="w-2 h-2 rounded-full animate-spin px-2 bg-violet-500"></div>
        <div className="w-1.5 h-1.5 rounded-full px-2 animate-spin bg-violet-400"></div>
      </div>
      )
    }
    if(allData.singleError){
      return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>{data.error}</div>
    
    }
  
    if(!allData.data.length & allData.data.filterLoading == false){
      return <NoData/>
    }
  



  return (
<div className='bg-neutral-50  dark:bg-gray-900 dark:text-white/80 p-6'>


<form  onSubmit={nextHandler}>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
    <div className="border-b border-gray-900/10 dark:border-neutral-600 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white/80">Update Epmloyee data {employeeId}</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/80">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-6">

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Employee Name</label>
          <div className="mt-2">
            <input 
             value={postData.employeeName !== obj?.fullName ? postData.employeeName || ` ${obj?.fullName}` : obj?.fullName}
             onChange={(e)=> setPostData({...postData,employeeName:e.target.value})}  type="text"  
             className={`${asured == true & postData.employeeName == ''|| !obj.fullName && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Employee Email</label>
          <div className="mt-2">
            <input 
            value={postData.employeeEmail !== obj?.email ? postData.employeeEmail || ` ${obj?.email}` : obj?.email}
             onChange={(e)=> setPostData({...postData,employeeEmail:e.target.value})} type="email"   
             className={`${asured == true & postData.employeeEmail == '' || !obj.email && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Employee Phone</label>
          <div className="mt-2">
            <input
            value={postData.employeePhone !== obj?.phone ? postData.employeePhone || ` ${obj?.phone}` : obj?.phone}
             onChange={(e)=> setPostData({...postData,employeePhone:e.target.value})} type="text"
            className={`${asured == true & postData.employeePhone == ''|| !obj.phone && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>
      </div>
    </div>




    <div className="w-full grid grid-cols-1 xl:gap-4  xl:grid-cols-2 2xl:grid-cols-3">

    <div className="flex flex-col gap-2 py-6">
    <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Office</p>
    <Select
        className={` ${asured == true & postData.office    == ''|| !obj.office && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} basic-single dark:text-black dark:bg-gray-900  lg:w-96  justify-center items-center`}
        classNamePrefix="select"
        defaultValue={ officeData.find(prev => prev.label == obj.office)}
        isDisabled={isDisabled}
        isLoading={true}
        onChange={officeChange}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={officeData}
      />
    </div>

    <div className="flex flex-col py-6 gap-2">
    <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Job Category</p>
    <Select
        className={`${ asured === true & postData.category === ''|| !obj.category && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600' } basic-single dark:text-black dark:bg-gray-900 lg:w-96 justify-center items-center`}
        classNamePrefix="select"
        defaultValue={data.find(prev => prev.label === obj.category)}
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
    
    {/* <div className="flex flex-col gap-2 py-6">
    <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Job Type</p>
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
    </div> */}
      </div>



  

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-4">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white/80">Posission </label>
              <div className="mt-2">
            <input 
            value={postData.title !== obj?.title ? postData.title || ` ${obj?.title}` : obj?.title}
            onChange={(e)=> setPostData({...postData,title:e.target.value})} type="text"  autoComplete="given-name" 
            className={`${asured == true & postData.title == ''|| !obj.title && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block dark:bg-gray-600 dark:text-white/80 active:outline-none px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:shadow-md focus:shadow-indigo-500   sm:text-sm sm:leading-6`}/>
          </div>
        </div>
        

        <div className="col-span-full lg:col-span-5">
          <label htmlFor="about" className="block text-sm font-medium leading-6 dark:text-white/80 text-gray-900">About</label>
          <div className="mt-2">
            <textarea 
            value={postData.detail !== obj?.detail ? postData.detail || ` ${obj?.detail}` : obj?.detail}
            onChange={(e)=> setPostData({...postData,detail:e.target.value})}  id="about"  name="about" rows="6" 
            className={` ${asured == true & postData.detail == ''|| !obj.detail && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block p-6 w-full rounded-md border-0 dark:bg-gray-700 dark:text-white/80-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-600 dark:text-white/80 sm:text-sm sm:leading-6`}></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/80">Write a few sentences about yourself.</p>
        </div>

      </div>
    </div>
   




    <div className="col-span-3 lg:w-[70%] ">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 dark:text-white/80 text-gray-900">Cover photo</label>
          <div className={` ${asured == true & !obj?.images?.length  && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} mt-2 flex justify-center rounded-lg border   border-dashed border-gray-900/25 dark:border-white/80 px-6 py-10 dark:text-white/80 `}>
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white px-3 py-1 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input onChange={selectImages} multiple id="file-upload" name="file-upload" type="file" className="sr-only "/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

       <div className="container flex justify-start flex-wrap overflow-y-auto mt-6">
            {detail.map(({images,i})=>{
              return(
                  images.length > 0 &&
                  images.map((file,i)=>{
                      return (
                          <div key={i} className={`relative  w-[120px] h-[120px]'} mb-4 ml-2 `}>
                            <div className={``}>
                            <div className={`top-1 right-1 flex justify-center items-center p-1 w-6 h-6 absolute  bg-white rounded-full`}>
                            <span className='  text-xl font-bold   p-1  text-black rounded-full'  onClick={()=> deletePhoto(images.indexOf(file))}>&times;</span>
                            </div>
                            </div>
                            
                              {typeof file === "string" ? (
                                // Server image (URL string)
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  src={file}
                                  alt="News content"
                                />
                              ) : (
                                // Newly uploaded file (File object)
                                file.type.startsWith("image/") ? (
                                  <img
                                    className="w-full h-full rounded-lg object-cover"
                                    src={URL.createObjectURL(file)}
                                    alt="Uploaded content"
                                  />
                                ) : (
                                  <video
                                    className="w-full h-full rounded-lg object-cover"
                                    controls
                                    src={URL.createObjectURL(file)}
                                  />
                                )
                              )}
                        </div>
                      )
                  })
              )
          })
        }
      </div>


    <div className='w-52'>
      <label htmlFor="Birthday" className="block text-sm text-gray-500 dark:text-gray-300">Dead Line</label>

      <input 
      value={postData.date !== obj?.date ? postData.date || `${obj?.date}` : obj?.date}
      onChange={(e) => setPostData({...postData,date:e.target.value})} type="date" placeholder="Dead Line" 
      className={` ${asured == true & !postData.date || !obj.date && 'shadow-3 shadow-red-700 dark:shadow-3 dark:shadow-fuchsia-600'} block  mt-2 w-full placeholder-gray-400/70 dark:text-white/80 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border- blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300`} />
  </div>
    </div>

   {errMessage &&
    <div className="py-3">
    <div className="w-full text-white bg-red-500 rounded-md">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                </path>
            </svg>

                <p className="mx-3">{errMessage}</p>
            </div>

            <button onClick={()=> setErrMessage('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    </div>
    </div>
   }


  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button onClick={()=> navigate('/admin/jobs')} type="button" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white/80">Cancel</button>
    <button type="submit"  className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
  </div>
</form>



<dialog open={open} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<div className="container px-6 py-6 mx-auto text-center">
        <div className="max-w-lg mx-auto">

            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Almost Done you just have to click the button bellow</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">please be sure first that everything is as you want before publish</p>
           {!loading && 
             <div className='flex gap-5 justify-center items-center'>
                <button onClick={()=> setOpen(false)}  className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-600 rounded-lg hover:bg-gray-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Not Sure 
                </button>
                <button onClick={submitHundler}  className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Publish it
                </button>
              </div>
           }
           {loading && <div className="w-16  h-16 mx-auto py-20 mt-12 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>}
        </div>
    </div>
</dialog>

<dialog open={succed} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            CONGRATULATIONS!! your <span className="text-blue-500">New job</span> Content has been succesfully published
        </h2>

        <div className="inline-flex w-full mt-10 sm:w-auto">
            <a href="/admin/employees" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </a>
        </div>
    </div>
</section>
</dialog>

<dialog open={errorPage} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">

    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Something went wrong! <span className="text-blue-500">New job</span> 
        </h2>
        
    {err &&
            <div className="py-3">
            <div className="w-full text-white bg-red-500 rounded-md">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                <div className="flex">
                    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                        </path>
                    </svg>

                        <p className="mx-3">{err}</p>
                    </div>

                    <button onClick={()=> setErr('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            </div>
          }

        
        <div className="inline-flex w-full mt-10 sm:w-auto">
            <button onClick={()=>  setLoading(false) & setOpen(false) & setSucced(false) & setErrorPage(false) & setResponse('') }  className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </button>
        </div>
    </div>
</section>
</dialog>

</div>
 )
}

export default UpdateEmloyee