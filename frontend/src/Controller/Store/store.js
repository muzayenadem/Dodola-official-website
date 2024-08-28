import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
    }
})
export default store