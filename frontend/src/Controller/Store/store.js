import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
import HomeToggle from '../Buttons/ToggleHomeSidebar'
import mainPost from '../Posts/MainPostSlicer'
import adminToken from '../Tokens/adminToken'
import content from '../Data/contentSlice'
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
       HomeToggle,

       //post reducers
       mainPost,

       //loggined asure reduceres
       adminToken,

       //data from server
       content,

       //fitered at react or fronend

    }
})
export default store