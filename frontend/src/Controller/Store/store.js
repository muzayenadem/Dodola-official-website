import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
import HomeToggle from '../Buttons/ToggleHomeSidebar'
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
       HomeToggle,
    }
})
export default store