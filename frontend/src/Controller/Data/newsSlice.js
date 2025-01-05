import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'
import { axiosSingleDataFetchingNews } from '../AxiosFunctions/AxiosSingleDataFetchingFunction'

const initialState = {
    loading:false,
    data:[],

    single:[],

    comment:[],
    reaction:{},
    singleLoading:false,
    singleError:'',
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

export const searchNews = createAsyncThunk('newsSlice/searchNews',(value)=>{
    return axiosFilterFunction(`${serverLink}/search-news`,value)
})
export const fetchSingleNews = createAsyncThunk('newsSlice/fetchSingleNews',(newsId)=>{
    return axiosSingleDataFetchingNews(`${serverLink}/single-news/${newsId}`)
})
export const fetchReaction = createAsyncThunk('newsSlice/fetchReaction',(newsId)=>{
    return axiosSingleDataFetchingNews(`${serverLink}/single-news/${newsId}`)
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
          //for fetching single news
          build.addCase(fetchSingleNews.pending,(state,action)=>{
            state.singleLoading = true
            state.loading = false
        })
        build.addCase(fetchSingleNews.fulfilled,(state,action)=>{
            state.single = []
            state.loading = false
            state.singleLoading = false
            state.reaction = action.payload.reaction
            state.comment = action.payload.comment && action.payload.comment
            state.single.length == 0 && state.single.push(action.payload.news)
        })

        build.addCase(fetchSingleNews.rejected,(state,action)=>{
            state.loading = false
            state.singleLoading =false
            state.singleError = action.error.message
        })
        build.addCase(fetchReaction.fulfilled,(state,action)=>{
            state.reaction = action.payload.reaction
        })
        
    }
})
export default  newsSlice.reducer