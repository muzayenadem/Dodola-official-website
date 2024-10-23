import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'


const initialState = {
    loading:false,
    data:[],
    filterLoading:false,
    error:'',
    role:{}
}
//server side render

export const fetchAdminData = createAsyncThunk('adminsSlice/fetchAdminData',()=>{
    return axiosFunction(`${serverLink}/admin-data`)
 })
 
const adminDataSlice = createSlice({
    name:'adminData',
    initialState:initialState,
    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchAdminData.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchAdminData.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.role = action.payload.role
        })
        build.addCase(fetchAdminData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default  adminDataSlice.reducer