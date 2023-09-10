import { createSlice } from '@reduxjs/toolkit';

const popUpSlice=createSlice({
    name:"popup",
    initialState:false,
    reducers:{
        open:(state:boolean)=>!state,
    }
})

export const {open}=popUpSlice.actions;
export default popUpSlice.reducer;