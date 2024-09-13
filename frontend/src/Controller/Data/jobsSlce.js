import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunctio } from '../AxiosFunctions/axiosFilterFunction'

const initialState = {
    loading:false,
    data:[],
    error:''
}
//server side render
export const fetchJobs = createAsyncThunk('jobSlice/fetchJobs',()=>{
   return axiosFunction(`${serverLink}/jobs`)
})
export const  filterJobsFromServer = createAsyncThunk('jobSlice/filterJobsFromServer',(value)=>{
    return axiosFilterFunctio(`${serverLink}/filter-jobs`,value)
})
export const reFetchJobs = createAsyncThunk('jobSlice/reFetchJobs',()=>{
    return axiosFunction(`${serverLink}/jobs`)
 })

const jobsSlice = createSlice({
    name:'jobsSlice',
    initialState:initialState,
    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchJobs.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchJobs.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(fetchJobs.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        //for filtering
        build.addCase(filterJobsFromServer.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(filterJobsFromServer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })

        //for refetchin content
        build.addCase(reFetchJobs.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(reFetchJobs.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default  jobsSlice.reducer