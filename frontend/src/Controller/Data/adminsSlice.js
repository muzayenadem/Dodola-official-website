import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosSingleDataFetching } from '../AxiosFunctions/AxiosSingleDataFetchingFunction'


const initialState = {
    loading:false,
    data:[],
    single:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchAdmins = createAsyncThunk('adminsSlice/fetchAdmins',()=>{
   return axiosFunction(`${serverLink}/admins`)
})

export const fetchSingleAdmin = createAsyncThunk('adminSlice/fetchSingAdmin',(adminId)=>{
    return axiosSingleDataFetching(`${serverLink}/single-admin/${adminId}`)
})

const adminsSlice = createSlice({
    name:'adminsSlice',
    initialState:initialState,
    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchAdmins.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchAdmins.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(fetchAdmins.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        build.addCase(fetchSingleAdmin.pending, (state,action)=>{
            state.loading = true
        })
        build.addCase(fetchSingleAdmin.fulfilled,(state,action)=>{
            state.loading = false
            state.single = action.payload
        })
          build.addCase(fetchSingleAdmin.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default  adminsSlice.reducer