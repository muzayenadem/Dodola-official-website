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
export const fetchNews = createAsyncThunk('newsSlice/fetchNews',()=>{
   return axiosFunction(`${serverLink}/news`)
})
export const  filterNewsFromServer = createAsyncThunk('newsSlice/filterNewsFromServer',(value)=>{
    return axiosFilterFunction(`${serverLink}/filter-news`,value)
})
export const reFetchNews = createAsyncThunk('newsSlice/reFetchNews',()=>{
    return axiosFunction(`${serverLink}/news`)
 })

export const searchNews = createAsyncThunk('jobsSlice/searchJobs',(value)=>{
    return axiosFilterFunction(`${serverLink}/search-news`,value)
})

const newsSlice = createSlice({
    name:'newsSlice',
    initialState:initialState,
    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchNews.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchNews.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(fetchNews.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        //for filtering
        build.addCase(filterNewsFromServer.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(filterNewsFromServer.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(filterNewsFromServer.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.error = action.error.message
        })

        //for refetchin content
        build.addCase(reFetchNews.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(reFetchNews.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(reFetchNews.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading =false
            state.error = action.error.message
        })
        // for searching jobs
        build.addCase(searchNews.fulfilled,(state,action) =>{
            state.loading = false
            state.filterLoading =false
            state.data = action.payload
        })
        build.addCase(searchNews.rejected,(state,action) =>{
            state.loading = false
            state.filterLoading =false
            state.data = action.error.message
        })
    }
})
export default  newsSlice.reducer