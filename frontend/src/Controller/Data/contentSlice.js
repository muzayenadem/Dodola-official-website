import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'
import { axiosSingleDataFetching } from '../AxiosFunctions/AxiosSingleDataFetchingFunction'

const initialState = {
    loading:false,

    singleLoading:false,
    singleError:'',
    data:[],
    single:[],
    filteredData:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchContent = createAsyncThunk('contentSlice/fetchContent',()=>{
   return axiosFunction(`${serverLink}/contents`)
})
export const  filterContentFromServer = createAsyncThunk('contentSlice/filterContentFromServer',(value)=>{
    return axiosFilterFunction(`${serverLink}/releated-content`,value)
})
export const reFetchContent = createAsyncThunk('contentSlice/reFetchContent',()=>{
    return axiosFunction(`${serverLink}/contents`)
 })
export const fetchSingleContent = createAsyncThunk('contentSlice/fetchSingContent',(contentId)=>{
    return axiosSingleDataFetching(`${serverLink}/single-content/${contentId}`)
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
            state.filteredData = action.payload
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
              //for fetching single news
                  build.addCase(fetchSingleContent.pending,(state,action)=>{
                    state.singleLoading = true
                    state.loading = false
                })
                build.addCase(fetchSingleContent.fulfilled,(state,action)=>{
                    state.loading = false
                    state.singleLoading = false
                    state.single = action.payload
                })
        
                build.addCase(fetchSingleContent.rejected,(state,action)=>{
                    state.loading = false
                    state.singleLoading =false
                    state.singleError = action.error.message
                })
    }
})

export default  contentSlice.reducer