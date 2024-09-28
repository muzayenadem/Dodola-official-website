import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../../Controller/Data/questionsSlice'

function questionsData() {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchQuestions())
    },[])

    const question = useSelector(state => state.questions)
  return question
}

export default questionsData