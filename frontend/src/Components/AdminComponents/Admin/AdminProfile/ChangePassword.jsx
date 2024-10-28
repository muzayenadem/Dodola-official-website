import React, { useState } from 'react'
import { MdClear } from 'react-icons/md'
import axios from 'axios'
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink'
function ChangePassword({setOpen}) {
    const [err,setErr] = useState('')
	const [loading,setLoading] = useState(false)
	const [succes,setSucces] = useState('')
    const [data,setData] = useState({
        previousPassword:'',newPassword:'',confirmPassword:''
    })

   // Frontend (React)
   const submitHandler = async (e) => {
    e.preventDefault();
    
    if (data.newPassword !== data.confirmPassword) {
        return setErr({ type: 'error', message: 'Passwords do not match' });
    }

    try {
        setLoading(true);
        const response = await axios.put(`${serverLink}/change-admin-password`, data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        setSucces({ type: 'success', message: 'Password changed successfully' });
    } catch (error) {
        const errorMsg = error.response?.data?.error || 'Server error, please try again';
        setErr({ type: 'error', message: errorMsg });
    } finally {
        setLoading(false);
    }
};

             
  return (
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md">
     <div className="flex justify-start">
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Change Password</h2>
        <button onClick={()=> setOpen(false)} className='flex justify-center font-bold text-3xl px-4 '>
            <span>{<MdClear/>}</span>
        </button>
     </div>
        <form id="registrationForm" novalidate onSubmit={submitHandler}>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">Previous Password</label>
                <input onChange={(e)=> setData({...data,previousPassword:e.target.value})} type="password" id="previous-password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Previous password" required/>
                <p class="text-red-500 text-sm mt-2 hidden" id="previosPsswordError">Please enter previos password.</p>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">New Password</label>
                <input onChange={(e)=> setData({...data,newPassword:e.target.value})} type="password" id="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter new password" required/>
                <p class="text-red-500 text-sm mt-2 hidden" id="passwordError">Password is required.</p>
            </div>
            <div class="mb-4">
                <label for="confirm-password" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                <input onChange={(e)=> setData({...data,confirmPassword:e.target.value})} type="password" id="confirm-password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Confirm password" required/>
                <p class="text-red-500 text-sm mt-2 hidden" id="confirmPasswordError">Passwords do not match.</p>
            </div>

            <div class={`w-full rounded-lg ${loading ? 'bg-fuchsia-950' : 'bg-blue-500'} mt-4 text-white text-lg font-semibold`}>
                <button type=" focus:outline-none submit" class="w-full  p-4">
                    {loading ?    <div className="w-16  h-16 mx-auto  rounded-full border-4 border-dashed  animate-spin border-violet-600"></div> : 'Change'}
                </button>
            </div>
 
            {succes && 
                <div class="w-full text-white mt-1 bg-emerald-500">
                    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div class="flex">
                            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                                </path>
                            </svg>

                            <p class="mx-3">{succes.message}</p>
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
				<div class="w-full text-white mt-1 bg-red-500">
					<div class="container flex items-center justify-between px-6 py-4 mx-auto">
						<div class="flex">
							<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
								<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
								</path>
							</svg>

							<p class="mx-3">{err.message}</p>
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
  )
}

export default ChangePassword