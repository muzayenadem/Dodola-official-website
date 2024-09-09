import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { serverLink } from '../CommonLinks/ServerLink'

const initialState ={
    loading:false,
    token:false,
    error:''    
}

export const adminTokenReducer = createAsyncThunk('adminToken/adminTokenReducer',()=>{
    return axios.get(`${serverLink}/isadminloggined`)
    .then((res) =>{
        return res.data
    })
    .catch((err) =>{
        return err.message

    })
})
const adminTokenSlice = createSlice({
    name:'adminToken',
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(adminTokenReducer.pending,(state,action)=>{
            state.loading = true
            state.error = 'pending'
        })
        builder.addCase(adminTokenReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.error = 'succed'
            state.token = action.payload
        })
        builder.addCase(adminTokenReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default adminTokenSlice.reducer