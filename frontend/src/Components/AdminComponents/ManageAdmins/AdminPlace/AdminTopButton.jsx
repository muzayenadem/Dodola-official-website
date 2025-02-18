import React, { useState } from 'react'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux'
// server side renders reducers
import { Link, useNavigate } from 'react-router-dom'
import { filterJobsFromServer, reFetchJobs } from '../../../../Controller/Data/jobsSlce';
function AdminTopButton() {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);


    const navigate = useNavigate('')
    const dispatch = useDispatch()
    const changeHandler = value =>{
        dispatch(filterJobsFromServer(value.label))
     }
    const allHandler = () =>{
      dispatch(reFetchJobs())
    }

    const contents = useSelector((state => state.content))
    if(contents.loading == true){
      return <div>Loading............</div>
    }

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
      
  return (
    <div className="flex justify-between">
    <div className="flex gap-3">
        <div className="relative" >


        <button
        onClick={allHandler}
        className="flex items-center rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        type="button">All</button>
       </div>


        {/* <Select
            className={` basic-single dark:text-black dark:bg-gray-900  lg:w-96  justify-center items-center`}
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
        /> */}

    </div>
    <button
        onClick={()=> navigate('/admin/add-admin')}
    className="flex items-center text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-700 dark:hover:bg-blue-500 dark:bg-blue-600 px-6 pb-2 pt-2.5 t font-medium uppercase leading-normal  shadow-light-3 ease-in-out hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3098_154395)">
                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3098_154395">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <span className='px-2'>Add Admin</span>

  </button>
  </div>
  )
}


export default AdminTopButton