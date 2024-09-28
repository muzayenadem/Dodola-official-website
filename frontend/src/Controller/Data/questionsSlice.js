import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'

const initialState = {
    data:[],
    loading:false,
    error:''
}

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions',()=>{
   return axiosFunction(`${serverLink}/questions`)
})

const questionSlice = createSlice({
    name:'questions',
    initialState:initialState,
    extraReducers:(build) =>{
        build.addCase(fetchQuestions.pending,(state,action)=>{
            state.loading = true
        })
        build.addCase(fetchQuestions.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(fetchQuestions.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default questionSlice.reducer
