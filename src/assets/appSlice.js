import { createSlice } from "@reduxjs/toolkit";

const show=createSlice({
    name:'sideBar',
    initialState: false,
    reducers:{
        toggle:(state)=>!state

    }
    })

export const { toggle } = show.actions;
export default show.reducer;