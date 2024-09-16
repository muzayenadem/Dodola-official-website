import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    data:{
        category:'ca',
        subCategory:'su',
        title:'ti',
        description:'des',
        date:'da',
        //postedDate:new Date(),
    },
    images:[]
}

const mainPost = createSlice({
    name:'mainPost',
    initialState:initailState,
    reducers:{
        setMainPost:(state,action) =>{
            state.data.title = action.payload.title
            state.data.description = action.payload.description
            state.data.date = action.payload.date  
            state.data.category = action.payload.category
            state.data.subCategory = action.payload.subCategory    
        },
        setMainPostImages :(state,action) =>{
            for (let  i = 0; i <= action.payload.length-1; i++ ){
                state.images.push(action.payload[i])
               }
        },
        removeMainImages :(state,action)=>{
            state.images.splice(action.payload,1)
        }
    }
})

export const {setMainPost,setMainPostImages,removeMainImages} = mainPost.actions 
export default mainPost.reducer