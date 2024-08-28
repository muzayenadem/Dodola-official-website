import { createSlice } from "@reduxjs/toolkit";
const initailState = {
    open:false
}

const toggleAdminSidebar = createSlice({
    name:'AdminToggle',
    initialState:initailState,
    reducers:{
        openAdminSidebarToggle : (state) =>{
            state.open = true
        },
        closeAdminSidebarToggle : (state) =>{
            state.open = false
        }
    }
})

export const {openAdminSidebarToggle,closeAdminSidebarToggle} = toggleAdminSidebar.actions
export default toggleAdminSidebar.reducer