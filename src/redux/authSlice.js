// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    resumeUrl: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        register: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        setResumeUrl: (state, action) => {
            state.resumeUrl = action.payload;
          }
    },
});

export const { login, logout, register,setResumeUrl  } = authSlice.actions;
export default authSlice.reducer;
