import React, { useState } from 'react'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux'
// server side renders reducers
import { useNavigate } from 'react-router-dom'
import { filterNewsFromServer, reFetchNews } from '../../../../Controller/Data/newsSlice';
function NewsTopButton() {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);


    const navigate = useNavigate('')
    const dispatch = useDispatch()
    const changeHandler = value =>{
        dispatch(filterNewsFromServer(value.label))
     }
    const allHandler = () =>{
      dispatch(reFetchNews())
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


        <Select
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
        />

    </div>
    <button
        onClick={()=> navigate('/admin/news-post')}
    className="flex items-center rounded bg-purple-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-purple-950 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button">
    Add <span className='hidden md:block'>{`_News`}</span>
  </button>
  </div>
  )
}



export default NewsTopButton