import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterContentFromServer } from '../../Controller/Data/contentSlice'


function filteredContentData(value) {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(filterContentFromServer(value)) 
    },[])
    const content = useSelector(state => state.content)
  return content
}


export default filteredContentData