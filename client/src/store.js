import { configureStore } from "@reduxjs/toolkit";
import dummy from "./slices/dummySlice";
import auth from './slices/authSlice';
import shop from './slices/shopSlice';

const store = configureStore({
    reducer: {
        alert: dummy,
        auth,
        shop
    }
});

export default store;