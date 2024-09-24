import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'

const initialState = {
    loading:false,
    data:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchJobs = createAsyncThunk('jobsSlice/fetchJobs',()=>{
   return axiosFunction(`${serverLink}/jobs`)
})
export const  filterJobsFromServer = createAsyncThunk('jobsSlice/filterJobsFromServer',(value)=>{
    return axiosFilterFunction(`${serverLink}/filter-jobs`,value)
})
export const reFetchJobs = createAsyncThunk('jobsSlice/reFetchJobs',()=>{
    return axiosFunction(`${serverLink}/jobs`)
 })

export const searchJobs = createAsyncThunk('jobsSlice/searchJobs',(value)=>{
    return axiosFilterFunction(`${serverLink}/search-jobs`,value)
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
        build.addCase(filterJobsFromServer.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(filterJobsFromServer.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(filterJobsFromServer.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.error = action.error.message
        })

        //for refetchin content
        build.addCase(reFetchJobs.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(reFetchJobs.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(reFetchJobs.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading =false
            state.error = action.error.message
        })
        // for searching jobs
        build.addCase(searchJobs.fulfilled,(state,action) =>{
            state.loading = false
            state.filterLoading =false
            state.data = action.payload
        })
        build.addCase(searchJobs.rejected,(state,action) =>{
            state.loading = false
            state.filterLoading =false
            state.data = action.error.message
        })
    }
})
export default  jobsSlice.reducer