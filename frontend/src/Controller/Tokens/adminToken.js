import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosToken } from '../AxiosFunctions/axiosToken'

const initialState ={
    loading:false,
    token:false,
    error:''    
}

export const adminTokenReducer = createAsyncThunk('adminToken/adminTokenReducer',()=>{
    // return axiosToken(`${serverLink}/isadminloggined`)
    return axios.get(`${serverLink}/isadminloggined`)
    .then((res) =>{
        return res.data
    })
    .catch((error) =>{
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //console.error('Server responded with an error:', error.response.data);
            //return error.response.data
            throw TypeError(error.response.data)
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received error:', error.request);
            //return error.request
            throw Error(error.message)
  
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
            throw Error(error.message)
          }
    })
})
const adminTokenSlice = createSlice({
    name:'adminToken',
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(adminTokenReducer.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(adminTokenReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.error = 'succed'
            state.token = action.payload
        })
        builder.addCase(adminTokenReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default adminTokenSlice.reducer