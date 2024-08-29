import { createSlice } from "@reduxjs/toolkit";
const initailState = {
    open:false
}

const toggleHomeSidebar = createSlice({
    name:'HomeToggle',
    initialState:initailState,
    reducers:{
        openHomeSidebarToggle : (state) =>{
            state.open = true
        },
        closeHomeSidebarToggle : (state) =>{
            state.open = false
        }
    }
})

export const {openHomeSidebarToggle,closeHomeSidebarToggle} = toggleHomeSidebar.actions
export default toggleHomeSidebar.reducer