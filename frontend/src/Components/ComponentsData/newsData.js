import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../Controller/Data/newsSlice'

function newsData() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchNews())
    },[])

    const news = useSelector(state => state.news)
  return news
}

export default newsData