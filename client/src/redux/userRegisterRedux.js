import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "signup",
    initialState:{
        isFetching: null,
        error: false,
    },
    reducers: {
        registerStart: (state)=>{
            state.isFetching = true
        },
        registerSuccess: (state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;

        },
        registerFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const { registerFailure, registerStart, registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;