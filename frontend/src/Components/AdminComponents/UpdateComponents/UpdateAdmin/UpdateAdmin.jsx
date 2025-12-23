import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import admins from '../../../ComponentsData/adminsData'
import { fetchSingleAdmin } from '../../../../Controller/Data/adminsSlice'
import { resetRoles, setRoles, toggleRole } from '../../../../Controller/Data/roleSlice'
function UpdateAdmin() {
  const [response , setResponse] = useState('')
  const [loading,setLoading] = useState('')
  const [open2,setOpen2] = useState(false)
  const [errMessage,setErrMessage] = useState('')
  const [errorPage,setErrorPage] = useState(false)
  const [succed,setSucced] = useState('')
  const [asured, setAsured] = useState(false)

  const [open,SetOpen] =  useState(false)
  const {adminId} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSingleAdmin(adminId))
  },[adminId,dispatch])

  const thisadmin = useSelector(state=> state.admins)
  const {single} = thisadmin
  const obj = single.reduce((accumulator, current) => {
    // Merge the properties of the current object into the accumulator.
    return { ...accumulator, ...current };
  }, {});

  const [adminData,setAdminData] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    password:'',
    confirmPassword:''
  })

  

  if (thisadmin){
    console.log({thisadmin,single,obj})
  }else {
    console.log("there is no admin")
  }


   const roles = useSelector(state => state.adminRoles.roles);

  useEffect(() => {
    console.log("working before return");

    if (!obj?.role) return;

    console.log("working after return");

    dispatch(resetRoles());      // clear old admin roles
    dispatch(setRoles(obj.role)); // set backend truth

  }, [obj?.role, dispatch]);

  const roleList = [
    "eventManager",
    "contentManager",
    "jobsManager",
    "biddingManager",
    "responseManager",
    "employeeManager",
    "generalManager"
  ];
  const submitHandler = async(e) =>{
    e.preventDefault()
    setLoading(true)

     const updatedData = {
        fname: adminData.fname ? adminData.fname : obj.fname,
        lname: adminData.lname ? adminData.lname : obj.lname,
        phone: adminData.phone ? adminData.phone : obj.phone,
        email: adminData.email ? adminData.email : obj.email,
        role:roles
    }
    try {
      const response  = await axios.put(`${serverLink}/update/admin-role/${adminId}`,
        {...updatedData},
        {withCredentials:true}
      )
      setLoading(false)
      setOpen2(false)
      setErrorPage(false)
      setSucced(response.data)
      // You can handle the response here, such as updating state in React
      return response.data;
      } catch (error) {
      // Error handling
      if (error.response) {
        setLoading(false)
        setOpen2(false)
        setSucced(false)
        setResponse(error.response.data)
        setErrMessage(error.response.data)
        setErrorPage(true)
        return error.response.data
      } else if (error.request) {
        // The request was made but no response was received
 
        setLoading(false)
        setOpen2(false)
        setSucced(false)
        setResponse('response not received')
        setErrMessage('Something went wrong ')
        setErrorPage(true)
        
        return error.request
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
        setLoading(false)
        setOpen2(false)
        setSucced(false)
        setResponse('Error setting up request')
        setErrMessage(error.message)
        setErrorPage(true)
        
        return error.message
      }
    }
}
  return (
    <>
   
    <section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')]">
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Update Admin with Specific Role.
                </h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

                <div class="mt-6 z-100">
                    <h1 class="text-gray-500 dark:text-gray-300">Select type of Role</h1>

                    <div class="mt-3 md:flex md:items-center md:-mx-2">
                        <div className="relative">
                        <button onClick={()=>SetOpen(!open)} class="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-64 md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>

                            <span class="mx-2">
                                {obj.role?.generalManager == true ? 'General Manager' : 'Specific Admin Role'}
                            </span>
                        </button>
                        <div onMouseLeave={()=> SetOpen(false)} className={`${!open ? 'hidden' : 'block'} w-64 absolute  bg-white shadow-lg z-50 py-10 px-5 dark:bg-gray-900 `}>
                            {roleList.map(role => (
                                <label key={role}  className="flex items-center px-4 gap-3 p-2">
                                  <input
                                    type="checkbox"
                                    className="size-5"
                                    checked={roles[role]}
                                    onChange={() => dispatch(toggleRole(role))}
                                  />
                                  {role
                                    .replace(/([A-Z])/g, " $1") // convert camelCase to words
                                    .replace(/^./, str => str.toUpperCase())}
                                </label>
                              ))}
                        </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={submitHandler} class="">
                  <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                        <input 
                        value={adminData.fname !== obj.fname ? adminData.fname || ` ${obj.fname}` : obj.fname}
                        onChange={(e)=> setAdminData({...adminData,fname:e.target.value})} 
                        type="text" 
                        placeholder="John" 
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                        <input 
                        value={adminData.lname !== obj.lname ? adminData.lname || ` ${obj.lname}` : obj.lname}
                        onChange={(e)=> setAdminData({...adminData,lname:e.target.value})} type="text" placeholder="Snow" 
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                        <input 
                        value={adminData.phone !== obj.phone ? adminData.phone || ` ${obj.phone}` : obj.phone}
                        onChange={(e)=> setAdminData({...adminData,phone:e.target.value})} type="text" placeholder="XXX-XX-XXXX-XXX" 
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input 
                        value={adminData.email !== obj.email ? adminData.email || ` ${obj.email}` : obj.email}
                        onChange={(e)=> setAdminData({...adminData,email:e.target.value})} type="email" placeholder="johnsnow@example.com" 
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button
                    type='submit'
                        class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>{loading ? 'Updating...' : 'Update'}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    </div>
                    
                    {succed && 
                    <div class="w-full text-white bg-emerald-500 my-5">
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
                    {errMessage &&
                      <div className="py-3 mt-2">
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
                </form>
            </div>
        </div>
    </div>
</section>


{/* <dialog open={loading} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<div className="container px-6 py-6 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1>{}</h1>
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Almost Done you just have to click the button bellow</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">please be sure first that everything is as you want before publish</p>
           {!loading && 
             <div className='flex gap-5 justify-center items-center'>
                <button onClick={()=> setOpen(false)}  className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-600 rounded-lg hover:bg-gray-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Not Sure 
                </button>
                <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Publish it
                </button>
              </div>
           }
           {loading && <div className="w-16  h-16 mx-auto py-20 mt-12 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>}
        </div>
    </div>
</dialog> */}
{/* <dialog open={succed} className='fixed top-0 left-0 bg-white py-20 dark:bg-gray-900 w-screen h-screen '>
<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            CONGRATULATIONS!! your <span className="text-blue-500">New job</span> Content has been succesfully published
        </h2>

        <div className="inline-flex w-full mt-10 sm:w-auto">
            <a href="/admin/admins" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Close
            </a>
        </div>
    </div>
</section>
</dialog> */}


</>
  )
}

export default UpdateAdmin