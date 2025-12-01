import React, { useEffect, useState } from 'react'
// import Progress from './Progress'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMainPost } from '../../../../Controller/Posts/MainPostSlicer'
import Data from '../../../ComponentsData/content'
import Select from 'react-select';
import InputPage from './InputPage'
import SubmitionPage from './SubmitionPage'
import { fetchSingleContent } from '../../../../Controller/Data/contentSlice'
import NoData from '../../../ErrorPages/NoData'
import axios, { AxiosError } from 'axios'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'

      
function UpdateContent() {
      const [response , setResponse] = useState('')
      const [loading,setLoading] = useState('')
      const [open,setOpen] = useState(false)
      const [errMessage,setErrMessage] = useState('')
      const [err,setErr] = useState('')
      const [errorPage,setErrorPage] = useState(false)
      const [succed,setSucced] = useState('')
      const [asured, setAsured] = useState(false)
      const [files,setFiles] = useState([])

      const [isClearable, setIsClearable] = useState(true);
      const [isSearchable, setIsSearchable] = useState(true);
      const [isDisabled, setIsDisabled] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [isRtl, setIsRtl] = useState(false);
    const [postData,setPostData] = useState({
        category:'',
        subCategory:'',
        name:'',
        title:'',
        description:'',
        date:'',
    })   

    const dispatch = useDispatch()

    const {contentId} = useParams()
    useEffect(()=>{
      dispatch(fetchSingleContent(contentId))
    },[dispatch])
    const {data} = useSelector(state => state.mainPost)
    useEffect(()=>{
      dispatch(setMainPost(postData))

    },[postData])
    console.log({data})


    
    const allData = Data()
    const {single} = allData
    const obj = single.reduce((accumulator, current) => {
        // Merge the properties of the current object into the accumulator.
        return { ...accumulator, ...current };
      }, {});

    console.log({All_Datas: allData,single,obj})

     const list = [
        {
            label:'About Dodola',
            value:1,
            list : [
                    {
                        value:1,
                        label:'History',
                    },
                    {
                        value:2,
                        label:'Festival'
                    },
                    {
                        value:3,
                        label:'Theme'
                    },
                    {
                        value:4,
                        label:'Religion'
                    },
                    {
                        value:5,
                        label:'Sport'
                    },
                    {
                        value:6,
                        label:'Adminstration Team'
                    },
                ]
        },
      {
          label:'Industry',
          value:2,
          list : [
                {
                    value:1,
                    label:'Agriculture'
                },
                {
                    value:2,
                    label:'Marketing'
                },
                {
                    value:3,
                    label:'Industrial Park'
                },
                {
                    value:4,
                    label:'Manufacturing'
                },
            ]
      },
      {
        label:'Education',
        value:4,
        list : [
                {
                    value:1,
                    label:'Elementary'

                },
                {
                    value:2,
                    label:'Secondary School'
                },
                {
                    value:3,
                    label:'Thecnical Class'
                },
                {
                    value:4,
                    label:'Depeloma'
                },
                {
                    value:5,
                    label:'Degree'
                },
            ]
    },
    {
        value:5,
        label:'Services',
        list :[
                {
                    value:1,
                    label:'Hospitals'

                },
                {
                    value:2,
                    label:'Hotels'
                },
                {
                    value:3,
                    label:'Banks'
                },
                {
                    value:4,
                    label:'Resourts'
                },
                {
                    value:5,
                    label:'Apartments'
                },
                {
                    value:6,
                    label:'Rental Houses'
                },
                {
                    value:7,
                    label:'Others'
                },
            ]
    },
  ]

const changeHandler = value => {
  setPostData({ ...postData, category: value.label });
  dispatch(setMainPost(postData));
};

const changeHandler2 = value => {
  setPostData({ ...postData, subCategory: value.label });
};

const findCategory = data => {
  return data.find(prev =>
    postData.category
      ? prev.label === postData.category
      : prev.label === obj?.category
  );
};

useEffect(()=>{
  setFiles(obj.images)
},[single])



const submitHundler2 = async (event) => {
    // ✅ validation with specific messages
    event.preventDefault()
  setLoading(true)
 let oldFiles = []
    for( let i = 0; i <= files.length ; i++){
      if(typeof files[i] === 'string'){
        if (files[i] != files[i-1]) oldFiles = [...oldFiles,files[i]]
      }
    }
  console.log({oldFiles,files})

  const updatedContentData = {
    category : postData.category ? postData.category : obj?.category,
    subCategory : postData.subCategory ? postData.subCategory : obj?.subCategory,
    name: postData.name ? postData.name : obj?.name,
    title: postData.title ? postData.title : obj?.title,
    description: postData.description ? postData.description : obj?.description,
    date: postData.date ? postData.date : obj?.date,
    files : oldFiles
  }

  const formData = new FormData()
  formData.append('data',JSON.stringify({updatedContentData}))
  for(let i = 0; i <= files.length; i++){
    formData.append('files',files[i]) 
  }

    try {
        // Replace with your server URL
    
        const response = await axios.put(`${serverLink}/update/content/${contentId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true, // This is important for sending credentials
          })
        console.log({mmmmmm: response.data});
        setLoading(false)
        setErr('')
        dispatch(fetchSingleContent(contentId))
        console.log({response})
        setSucced(response?.data?.message)
        
        // You can handle the response here, such as updating state in React
        return response.data;
    
    } catch (error ) {
       const e = error
         if(e.AxiosError){
          console.log({AxiosError:e.message})
          setErr(e.message)
         }
         if (e.response) {
           console.log({e:error})
           e.response?.data?.message && setErr(e.response?.data?.message)
           !e.response?.data?.message && setErr(e.message)
           console.log({errrr1:e.response})
          } else if (e.request) {
            console.log({errr2:e.response?.data})
            setErr(e.request?.message)
            console.error("No response from server");
          } else {
            console.log({error3:e.message})
            console.error("Error:", e.message);
          }
    } finally {
      setLoading(false);
    }
  };




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
    <div className='bg-white dark:bg-gray-900 py-10 dark:text-white/80'>
        <div className=" px-10 py-2 border-b-[1px] dark:border-b-neutral-700 border-b-neutral-300 ">
            <h2 className='capitalize text-xs font-medium lg:text-lg '>Update the content with <span className=' font-body'>{contentId}</span> Id</h2>
        </div>
 

 <div className='py-10 px-2 md:px-4 lg:px-6'>
      <div className="flex flex-col gap-5 px-2 lg:px-10">
       <div className="relative mt-3">
         <Select
        className="basic-single dark:text-black dark:bg-gray-900 min-w-72 lg:w-96  justify-center items-center"
        classNamePrefix="select"
        defaultValue={
            list.find(prev =>
              postData.category
                ? prev.label === postData.category
                : prev.label === obj?.category
            ) ?? { value: 0, label: `Select sub category of ${obj?.category}` }
          }
        isDisabled={isDisabled}
        isLoading={true}
        onChange={changeHandler}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={list}
      />
       </div>
       <div className=" relative mt-3">
         <Select
            className="basic-single dark:text-black dark:bg-gray-900 min-w-72 lg:w-96  justify-center items-center"
            classNamePrefix="select"
           defaultValue={
              findCategory(list)?.list?.find(prev =>
                postData.subCategory
                  ? prev.label === postData.subCategory
                  : prev.label === obj?.subCategory
              ) ?? { value: 0, label: `Select sub category of ${obj?.category}` }
            }
            onChange={changeHandler2}
            isLoading={true}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={findCategory(list)?.list}
          />
       </div>

    <InputPage stateData={obj} postData={postData} setPostData={setPostData} /> 

     <div className="flex justify-between md:w-[90%]">
          <Link to='/admin/content'>
              <button disabled={loading}  className='bg-purple-800  text-white  py-2 px-5 rounded-md hover:bg-purple-900 text-center items-center '>Cancel</button>
          </Link>
            <button onClick={submitHundler2}  className={`${loading ? 'bg-slate-400 hover:bg-slate-400' : 'bg-green-800 hover:bg-green-900'}  text-white  py-2 px-5 rounded-md text-center items-center `}>{loading ? 'Updating...':'Update'}</button>
        </div>
    </div>
    </div>
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
     
   	{
				succed && 
				<div class="w-full text-white bg-emerald-500">
				<div class="container flex items-center justify-between px-6 py-4 mx-auto">
					<div class="flex">
						<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
							<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
							</path>
						</svg>

						<p class="mx-3">{succed}</p>
					</div>

					<button onClick={()=> setSucced('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>
			}
    </div>
  )
}

export default UpdateContent