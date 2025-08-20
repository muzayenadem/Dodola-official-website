import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { axiosFunction } from '../AxiosFunctions/axiosFunction'
import { serverLink } from '../CommonLinks/ServerLink'
import { axiosFilterFunction } from '../AxiosFunctions/axiosFilterFunction'
import { axiosSingleDataFetching } from '../AxiosFunctions/AxiosSingleDataFetchingFunction'

const initialState = {
    loading:false,
    data:[],
    filteredData:[],
    filterLoading:false,
    error:'',
    singleLoading:false,
    single:[],
    singleError:"",
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
export const fetchSingleEmployee = createAsyncThunk('jobsSlie/fetchSingleEmployee',(employeeId) =>{
    return axiosSingleDataFetching(`${serverLink}/single-employee/${employeeId}`)
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
        build.addCase(fetchSingleEmployee.pending,(state,action)=>{
            state.singleLoading = true
            state.loading = false
        })
        build.addCase(fetchSingleEmployee.fulfilled,(state,action)=>{
            //state.single = []
            state.loading = false
            state.singleLoading = false
            //state.reaction = action.payload.reaction
            //state.comment = action.payload.comment && action.payload.comment
            state.single = action.payload
            //state.single.length == 0 && state.single.push(action.payload.news)
        })

        build.addCase(fetchSingleEmployee.rejected,(state,action)=>{
            state.loading = false
            state.singleLoading =false
            state.singleError = action.error.message
        })
    },
      reducers:{
            setEmployeeImages :(state,action) =>{
                for (let  i = 0; i <= action.payload.length-1; i++ ){
                state.single[0]?.images?.push(action.payload[i])
               }
            },
            removeEmployeeImages :(state,action)=>{
                state.single[0]?.images?.splice(action.payload,1)
            },
        }
})

export const {setEmployeeImages,removeEmployeeImages} = EmployeeSlice.actions
export default  EmployeeSlice.reducer