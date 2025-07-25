import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { serverLink } from '../../../Controller/CommonLinks/ServerLink'

function Subscribe() {
    const [err,setErr] = useState('')
    const [email, setEmail] = useState('')
	const [loading,setLoading] = useState(false)
	const [success,setSuccess] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault();

        // Basic validation for email and password fields
        if (!email) {
            return setErr({ type: 'error', message: 'Please provide your email' });
        }

        try {
            setLoading(true);
            const response = await axios.post(
                `${serverLink}/subscribe`,
                {email},
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            // Set success message
            setSuccess({ type: 'success', message:  response.data?.message || 'you have Successfully joined us!' });

            // Redirect to admin dashboard
            console.log({ response });
            //navigate('/admin');

        } catch (error) {
            const err = error.response?.data?.error
            console.log({err})
            const errorMsg = error.response?.data?.error || 'suscription failed. Please try again.';
            setErr({ type: 'error', message: errorMsg });
        } finally {
            setLoading(false);
        }
    };
  

  return (
    <div className="py-10">
        <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-black/5 rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Keep in touch for <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">New Information</span> Updates</h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">please feel free to be our member to get further knowdloge about dodola city</p>
        </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form onSubmit={submitHandler}>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input onChange={(e) => setEmail(e.target.value)} className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>

                <button 
                    className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                    disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Subscribe'}
                </button>
            </div>
            {success && 
                <div class="w-full  text-white mt-5 bg-emerald-500">
                    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div class="flex">
                            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                                </path>
                            </svg>

                            <p class="mx-3">{success.message}</p>
                        </div>

                        <button onClick={()=> setSuccess('')} class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
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
</section>
    </div>
  )
}

export default Subscribe