import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { serverLink } from '../../../Controller/CommonLinks/ServerLink'
import { useNavigate } from 'react-router-dom'
import { logo1, logo2 } from '../../AppComponents/Images/images'
function LoginAdmin() {
    const [err,setErr] = useState('')
	const [loading,setLoading] = useState(false)
	const [success,setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false) 
    const [admin,setAdmin] = useState({
        email:'',
        password:''
    })
    useEffect(()=>{
        window.document.title = 'admin login page'
    },[])
    const navigate = useNavigate('')

    const loginHandler = async (e) => {
        e.preventDefault();

        // Basic validation for email and password fields
        if (!admin.email || !admin.password) {
            return setErr({ type: 'error', message: 'Please fill all required fields.' });
        }

        try {
            setLoading(true);
            const response = await axios.post(
                `${serverLink}/login-admin`,
                { email: admin.email, password: admin.password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            // Set success message
            setSuccess({ type: 'success', message: 'Successfully logged in!' });

            // Redirect to admin dashboard
            console.log({ response });
            //navigate('/admin');
            window.location.href = '/admin'

        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Login failed. Please try again.';
            setErr({ type: 'error', message: errorMsg });
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={loginHandler} className="w-full max-w-md">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/> */}
            <img src={logo1} className="w-auto h-16 rounded-lg" alt=''/>
            <h1 className="mt-3 px-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h1>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input onChange={(e)=> setAdmin({...admin,email:e.target.value})} type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input onChange={(e)=> setAdmin({...admin,password:e.target.value})}   type={showPassword ? 'text' : 'password'}  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>


                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                    className="absolute right-3 text-gray-500 focus:outline-none"
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

          

            <div className="mt-6">
                {/* <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                </button> */}

                <button
                    type="submit"
                    className={`w-full p-4 rounded-lg text-white font-semibold ${loading ? 'bg-gray-500' : 'bg-blue-500'}`}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Sign in'}
                </button>


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

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
                <a href={`${serverLink}/auth/google`} className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>

                    <span className="mx-2">Sign in with Google</span>
                </a>
            </div>
        </form>
    </div>
</section>
  )
}

export default LoginAdmin