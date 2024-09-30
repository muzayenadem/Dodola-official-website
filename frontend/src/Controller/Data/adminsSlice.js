import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'


const initialState = {
    loading:false,
    data:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchAdmins = createAsyncThunk('adminsSlice/fetchAdmins',()=>{
   return axiosFunction(`${serverLink}/admins`)
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
       
    }
})
export default  adminsSlice.reducer