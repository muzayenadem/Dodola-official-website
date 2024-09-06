import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
import HomeToggle from '../Buttons/ToggleHomeSidebar'
import mainPost from '../Posts/MainPostSlicer'
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
       HomeToggle,

       //post reducers
       mainPost,
    }
})
export default store