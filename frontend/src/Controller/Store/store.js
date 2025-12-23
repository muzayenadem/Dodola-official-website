import { configureStore } from "@reduxjs/toolkit";
import AdminToggle from '../Buttons/ToggleAndminSidebar'
import HomeToggle from '../Buttons/ToggleHomeSidebar'
import mainPost from '../Posts/MainPostSlicer'
import adminToken from '../Tokens/adminToken'
import content from '../Data/contentSlice'
import employee from '../Data/employeeSlice'
import jobs from '../Data/jobsSlce'
import jobPost from "../Posts/jobPost";
import questions from "../Data/questionsSlice";
import news from '../Data/newsSlice'
import adminRoles from '../Data/roleSlice'
import admins from '../Data/adminsSlice'
import adminData from "../Data/adminData";
const store = configureStore({
    reducer:{
       //buttons 
       AdminToggle,
       HomeToggle,

       //post reducers
       mainPost,
       jobPost,
       //frontend admin role
       adminRoles,
       //loggined asure reduceres
       adminToken,

       //data from server
       adminData,
       admins,
       content,
       employee,
       jobs,
       news,
       questions,
    }
})
export default store