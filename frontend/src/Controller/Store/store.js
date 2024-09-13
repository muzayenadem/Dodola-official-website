import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
import HomeToggle from '../Buttons/ToggleHomeSidebar'
import mainPost from '../Posts/MainPostSlicer'
import adminToken from '../Tokens/adminToken'
import content from '../Data/contentSlice'
import jobs from '../Data/jobsSlce'
import jobPost from "../Posts/jobPost";
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
       HomeToggle,

       //post reducers
       mainPost,
       jobPost,

       //loggined asure reduceres
       adminToken,

       //data from server
       content,
       jobs,



    }
})
export default store