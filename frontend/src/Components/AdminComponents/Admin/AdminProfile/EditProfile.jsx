import React, { useState } from 'react'
import { br1, logo1, logo2 } from '../../../AppComponents/Images/images'
import axios from 'axios'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'
import adminData from '../../../ComponentsData/adminData'
import ChangePassword from './ChangePassword'

function EditProfile() {

	const [err,setErr] = useState('')
	const [loading,setLoading] = useState(false)
	const [succes,setSucces] = useState('')

    const [open,setOpen] =  useState(false)
    const [data,setData] = useState({
        fname:'',lname:'',email:'',phone:'',profileImg:'',cover:''
    })
    const {admin,role} = adminData()
    const {fname,lname,email,phone} = data
    console.log({admin})
    const {eventManager,jobsManager,contentManager,responseManager,biddingManager,generalManager} = role
    const submitHundler = async (e) =>{
        setLoading(true)
        e.preventDefault()
        const formData = new FormData()
        const datas = {
            fname: fname ? fname : admin.fname,
            lname: lname ? lname : admin.lname,
            email: email ? email : admin.email,
            phone: phone ? phone : admin.phone,
        }
        formData.append('data',JSON.stringify(datas))
        formData.append('profileImg',data.profileImg[0]) 
        formData.append('cover',data.cover[0]) 
   

        console.log({updateDate:data})
        try {
            const response = await axios.put(`${serverLink}/update-admin-profile`,formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                withCredentials: true, // This is important for sending credentials
              })
              setLoading(false)

              if (response.data){
				setSucces(response.data)
			}
              return response.data;
        } catch (error) {
            if(error.response){
                setLoading(false)
				setErr(error.response.data)
				return null
			}
			if(error.name == 'AxiosError'){
                setLoading(false)
				setErr(error.message)
				return null
			}
			if(error.request){
                setLoading(false)
				setErr(error.request)
				return null
			}
        }
    }
  return (
    <>
    <section class="py-10 my-auto dark:bg-gray-900 relative">
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div class="">
              <div className="flex justify-between">
                <div className="">
                    <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                        Profile
                    </h1>
                    <h2 class="text-grey text-sm mb-4 dark:text-gray-400">Update Profile</h2>
                </div>
                <button onClick={()=> setOpen(!open)} className=" self-center text-white bg-fuchsia-800 hover:bg-fuchsia-900 hover:font-normal font-medium px-4 py-2 rounded-md">
                    Change Password
                </button>
              </div>
                <form onSubmit={submitHundler}>
                    <div
                        class={`w-full rounded-sm py-5 bg-cover bg-center bg-no-repeat items-center`} style={{backgroundImage:`${ data.cover ? `url(${URL.createObjectURL(data.cover[0])})` : admin.coverImg ? `url(${admin.coverImg})` : `url(${logo1})`}`}}>
                        
                        <div
                            class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full  bg-cover bg-center bg-no-repeat" style={{backgroundImage:`${ !data.profileImg ? admin.profileImg ? `url(${admin.profileImg})` : `url(${br1})` : `url(${URL.createObjectURL(data.profileImg[0])})`}`}}>

                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input 
                                onChange={(e)=>setData({...data,profileImg:e.target.files})} type="file" name="profile" id="upload_profile" hidden />

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>
                        <div class="flex justify-end">
                       
                            <input onChange={(e)=> setData({...data,cover:e.target.files})} type="file" name="profile" id="upload_cover" hidden/>

                            <div
                                class="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                <label for="upload_cover" class="inline-flex items-center gap-1 cursor-pointer">Cover
                                    
                                <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none" stroke-width="1.5"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                    </path>
                                </svg>
                                </label>
                            </div>

                        </div>
                    </div>
                    <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">First Name</label>
                            <input 
                            value={fname !== admin.fname ? fname || ` ${admin.fname}` : admin.fname}
                            onChange={(e)=> setData({...data,fname:e.target.value})}  type="text"
                            class="mt-2 p-4 focus:outline-blue-400 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                            placeholder="First Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">Last Name</label>
                            <input 
                            value={lname !== admin.lname ? lname || ` ${admin.lname}` : admin.lname}
                            onChange={(e)=> setData({...data,lname:e.target.value})}  type="text"
                            class="mt-2 p-4 w-full focus:outline-blue-400 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                            placeholder="Last Name"/>
                        </div>
                    </div>

                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">Email</label>
                            <input
                            value={email !== admin.email ? email || ` ${admin.email}` : admin.email}
                            onChange={(e)=> setData({...data,email:e.target.value})}  type="email"
                            class="mt-2 p-4 w-full focus:outline-blue-400 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                            placeholder="Email"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">Phone</label>
                            <input 
                            value={phone !== admin.phone ? phone || ` ${admin.phone}` : admin.phone}
                            onChange={(e)=> setData({...data,phone:e.target.value})}  type=""
                            class="mt-2 p-4 w-full focus:outline-blue-400 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                            placeholder="Phone"/>
                        </div>
                    </div>


                    <div class={`w-full rounded-lg ${loading ? 'bg-fuchsia-950' : 'bg-blue-500'} mt-4 text-white text-lg font-semibold`}>
                        <button type=" focus:outline-none submit" class="w-full  p-4">
                            {loading ?    <div className="w-16  h-16 mx-auto  rounded-full border-4 border-dashed  animate-spin border-violet-600"></div> : 'Update'}
                        </button>
                    </div>
                {succes && 
                <div class="w-full text-white mt-5 bg-emerald-500">
                    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div class="flex">
                            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                                </path>
                            </svg>

                            <p class="mx-3">{succes}</p>
                        </div>

                        <button onClick={()=> setSucces('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                }
			    {err &&
				<div class="w-full text-white mt-5 bg-red-500">
					<div class="container flex items-center justify-between px-6 py-4 mx-auto">
						<div class="flex">
							<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
								<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
								</path>
							</svg>

							<p class="mx-3">{err}</p>
						</div>

						<button onClick={()=> setErr('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
							<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			 }
                </form>
            </div>
        </div>
    </div>
</section>

<dialog open={open} className=' absolute top-20 '>
    <ChangePassword setOpen={setOpen}/>
</dialog>
</>
  )
}

export default EditProfile