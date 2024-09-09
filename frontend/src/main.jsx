import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './Controller/Store/store.js'
import { ProSidebarProvider } from "react-pro-sidebar";
import axios from 'axios'
axios.defaults.withCredentials = true
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProSidebarProvider>
      <App />
      </ProSidebarProvider>
    </Provider>
  </React.StrictMode>,
)