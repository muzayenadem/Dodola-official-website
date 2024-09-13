import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../Controller/Data/jobsSlce'

function jobs() {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchJobs()) 
    },[])
    const jobs = useSelector(state => state.jobs)
  return jobs
}

export default jobs