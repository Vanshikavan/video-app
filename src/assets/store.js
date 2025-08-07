import { configureStore } from "@reduxjs/toolkit";
import show from './appSlice.js';
import searchSlice from './searchSlice.js'
import chatSlice from './chatSlice.js'


const store= configureStore({
    reducer:{
        sideBar: show,
        search:searchSlice,
        chat:chatSlice
    }
})

export default store;