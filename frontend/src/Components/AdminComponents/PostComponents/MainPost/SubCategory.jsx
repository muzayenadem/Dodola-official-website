


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import { setMainPost } from '../../../../Controller/Posts/MainPostSlicer';


const SubCategory =  ({data,method,setMethod,postData,setPostData}) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [value,setValue] =useState('')


  const dispatch = useDispatch()
  const changeHandler = value =>{
    setValue(value)
    setPostData({...postData,subCategory:value.label})
    setMethod({...method,subCategory:false,inputPage:true})
   // dispatch(setMainPost({subCategory:value.label}))
  }
  return (
    <div >
    <div className=" py-10">
    <h3 className='text-lg lg:text-2xl text-center'>Also Select  which sub category you want to post</h3>
    </div>
     <div className="flex justify-center items-center">
   <Select
     className="basic-single dark:text-black dark:bg-gray-900 min-w-72 lg:w-96  justify-center items-center"
     classNamePrefix="select"
     defaultValue={{value:0,label:`Select sub category of ${postData.category}`}}
     onChange={changeHandler}
     isLoading={true}
     isClearable={isClearable}
     isRtl={isRtl}
     isSearchable={isSearchable}
     name="color"
     options={data}
   />
 </div>
 </div>
  );
}
export default SubCategory