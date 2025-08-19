import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'
import { axiosSingleDataFetching } from '../AxiosFunctions/AxiosSingleDataFetchingFunction'

const initialState = {
    // for getting
    loading:false,
    data:[],
    filterLoading:false,
    error:'',
    singleLoading:false,
    single:[],
    singleError:"",
    // for posting 
    requirements:[]
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
export const fetchSingleJob = createAsyncThunk('jobsSlie/fetchSingleJob',(jobId) =>{
    return axiosSingleDataFetching(`${serverLink}/single-job/${jobId}`)
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
          build.addCase(fetchSingleJob.pending,(state,action)=>{
            state.singleLoading = true
            state.loading = false
        })
        build.addCase(fetchSingleJob.fulfilled,(state,action)=>{
            //state.single = []
            state.loading = false
            state.singleLoading = false
            //state.reaction = action.payload.reaction
            //state.comment = action.payload.comment && action.payload.comment
            state.single = action.payload
            state.requirements = state.single[0]?.job?.requirement
            //state.single.length == 0 && state.single.push(action.payload.news)
        })

        build.addCase(fetchSingleJob.rejected,(state,action)=>{
            state.loading = false
            state.singleLoading =false
            state.singleError = action.error.message
        })
    },
    reducers:{
        setJobRequirements : (state,action) =>{
            state.requirements.push(action.payload)
        },
        removeJobRequirements: (state, action) => {
            state.requirements.splice(action.payload,1)
        },
        reLoadRequirements:(state,action) =>{
            state.requirements = state.single[0]?.job?.requirement
        },
         setUpdateJobPostImages :(state,action) =>{
            for (let  i = 0; i <= action.payload.length-1; i++ ){
                state.single[0]?.images?.push(action.payload[i])
               }
        },
        removeUpdateJobPostImages :(state,action)=>{
            state.single[0]?.images?.splice(action.payload,1)
        }
    }
})
export const {
    setJobRequirements, 
    removeJobRequirements,
   setUpdateJobPostImages,
   removeUpdateJobPostImages,
   reLoadRequirements
} = jobsSlice.actions
export default  jobsSlice.reducer