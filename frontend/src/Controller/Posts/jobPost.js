import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:{
        category:'',
        title:'',
        description:'',
        salary:'',
        type:'',
        deadline:'',
        experience:'',
        requirement:'',
        postedDay:new Date()
    },
    contact:{
        campanyName:'',
        companyEmail:'',
        companyPhone:''
    },
    address:{
        streate:'',
        city:'',
        state:'',
        postalCode:'',
    },
    images:[],
}

const jobPostSlice = createSlice({
    name:'jobPost',
    initialState:initialState,
    reducers:{
        setJobPostData:(state,action) =>{
            state.data.category = action.payload.category
            state.data.title = action.payload.title
            state.data.description = action.payload.description
            state.data.salary = action.payload.salary
            state.data.type = action.payload.type
            state.data.experience = action.payload.experience
            state.data.deadline = action.payload.deadline
        },
        SetJobPOstAddress:(state,action) =>{
            state.address.streate = action.payload.streate
            state.address.city = action.payload.city
            state.address.state = action.payload.state
            state.address.postalCode = action.payload.postalCode
        },
        setJobPostImages :(state,action) =>{
            for (let  i = 0; i <= action.payload.length-1; i++ ){
                state.images.push(action.payload[i])
               }
        },
        removeJobPOstImages :(state,action)=>{
            state.images.splice(action.payload,1)
        }
    }
})

export const {setJobPostData,setJobPostImages,SetJobPOstAddress,removeJobPOstImages} = jobPostSlice.actions
export default jobPostSlice.reducer