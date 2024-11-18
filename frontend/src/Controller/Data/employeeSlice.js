import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'

const initialState = {
    loading:false,
    data:[],
    filteredData:[],
    filterLoading:false,
    error:''
}
//server side render
export const fetchEmployee = createAsyncThunk('EmployeeSlice/fetchEmployee',()=>{
   return axiosFunction(`${serverLink}/employee`)
})
export const  filterEmployeeFromServer = createAsyncThunk('EmployeeSlice/filterEmployeeFromServer',(value)=>{
    return axiosFilterFunction(`${serverLink}/filter-employee`,value)
})
export const reFetchEmployee = createAsyncThunk('EmployeeSlice/reFetchEmployee',()=>{
    return axiosFunction(`${serverLink}/employee`)
 })

const EmployeeSlice = createSlice({
    name:'EmployeeSlice',
    initialState:initialState,

    //servser side render
    extraReducers:(build) =>{
        // collin when the app rendered 
        build.addCase(fetchEmployee.pending,(state,action) =>{
            state.loading = true
        })
        build.addCase(fetchEmployee.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.allData = action.payload
        })
        build.addCase(fetchEmployee.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        //for filtering
        build.addCase(filterEmployeeFromServer.pending,(state,action)=>{
            state.filterLoading = true
            state.loading = false
        })
        build.addCase(filterEmployeeFromServer.fulfilled,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.data = action.payload
        })
        build.addCase(filterEmployeeFromServer.rejected,(state,action)=>{
            state.loading = false
            state.filterLoading = false
            state.error = action.error.message
        })

        //for refetchin content
        build.addCase(reFetchEmployee.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        build.addCase(reFetchEmployee.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default  EmployeeSlice.reducer