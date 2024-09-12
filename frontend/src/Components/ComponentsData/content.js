import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../../Controller/Data/contentSlice'

function content() {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchContent()) 
    },[])
    const content = useSelector(state => state.content)
  return content
}

export default content