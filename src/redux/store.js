// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        jobs: jobReducer,
        auth: authReducer,
    },
});

export default store;
