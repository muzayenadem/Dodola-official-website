import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from './axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'

const initialState = {
    loading:false,
    data:[],
    allData:[],
    error:''
}

export const fetchContent = createAsyncThunk('contentSlice/fetchContent',()=>{
   return axiosFunction(`${serverLink}/contents`)
})
const contentSlice = createSlice({
    name:'contentSlice',
    initialState:initialState,
    reducers:{
        filterContent:(state,action)=>{
            const data = state.allData.filter(data => data.subCategory == action.payload)
            state.data =  data

            state.loading = false
        },
        setAllContent:(state)=>{
            state.data = state.allData
        },
    },
    extraReducers:(build) =>{
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
    }
})
export const {filterContent,setAllContent} = contentSlice.actions
export default  contentSlice.reducer