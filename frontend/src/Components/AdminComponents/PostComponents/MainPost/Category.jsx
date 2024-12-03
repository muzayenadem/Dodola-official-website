


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import { setMainPost } from '../../../../Controller/Posts/MainPostSlicer';
//import { colourOptions } from '../data';



function Category({method,setMethod,postData,setPostData}) {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const [value,setValue] = useState('')

    const setCategory = (data) =>{
        setMethod({...method,defaults:false,subCategory:true,data:data})
    }
    const data = [
        {
            label:'About Dodola',
            value:1,
            func : () => setCategory(
                [
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
            ),
        },
      {
          label:'Industry',
          value:2,
          func : ()=>setCategory(
            [
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
            ])
      },
      {
        label:'Education',
        value:4,
        func : ()=>setCategory(
            [
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
            ])
    },
    {
        value:5,
        label:'Services',
        func : ()=>setCategory(
            [
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
            ])
    },
  ]
  
//   {
//     value:3,
//     label:'Offices',
//     func : ()=> setCategory(
//       [
//           {
//               value:1,
//               label:'Mayor Office'
//           },
//           {
//               value:2,
//               label:'Healthy Office'
//           },
//           {
//               value:3,
//               label:'Education Office'
//           },
//           {
//               value:4,
//               label:'Construction Office '
//           },
//           {
//               value:5,
//               label:'Human Resourse Office'
//           },
//           {
//               value:6,
//               label:'Agricultural Office'
//           },
//           {
//               value:7,
//               label:'Police Department Office'
//           },

//       ])
// },

  const dispatch = useDispatch()
  const changeHandler = value =>{
    setValue(value)
    setPostData({...postData,category:value.label})
    value.func()
   // dispatch(setMainPost(data={category:value.label}))
  }
  return (
    <div >
       <div className=" py-10">
       <h3 className='text-lg lg:text-2xl text-center'> Select which category you want to post</h3>
       </div>
        <div className="flex justify-center items-center">
      <Select
        className="basic-single dark:text-black dark:bg-gray-900 min-w-72 lg:w-96  justify-center items-center"
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
    </div>
  )
}

export default Category