import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunctio } from '../AxiosFunctions/axiosFilterFunction'

const initialState = {
    loading:false,
    data:[],
    filteredData:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchContent = createAsyncThunk('contentSlice/fetchContent',()=>{
   return axiosFunction(`${serverLink}/contents`)
})
export const  filterContentFromServer = createAsyncThunk('contentSlice/filterContentFromServer',(value)=>{
    return axiosFilterFunctio(`${serverLink}/filter-content`,value)
})
export const reFetchContent = createAsyncThunk('contentSlice/reFetchContent',()=>{
    return axiosFunction(`${serverLink}/contents`)
 })

const contentSlice = createSlice({
    name:'contentSlice',
    initialState:initialState,

    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchContent.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchContent.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.allData = action.payload
        })
        build.addCase(fetchContent.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        //for filtering
        build.addCase(filterContentFromServer.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(filterContentFromServer.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(filterContentFromServer.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.error = action.error.message
        })

        //for refetchin content
        build.addCase(reFetchContent.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(reFetchContent.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default  contentSlice.reducer