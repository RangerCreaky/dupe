import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert, removeAlert } from './dummySlice';

const delay = () => new Promise(resolve => setTimeout(resolve, 5000));
let initialState = []
export const alert = createAsyncThunk(
    'alert/dummy',
    async ({ type, msg }, { dispatch }) => {
        dispatch(setAlert({ type, msg }));
        await delay();
        console.log('delay finished');
        dispatch(removeAlert());
        return;
    }
)

const alertSlice = createSlice({
    name: "dummy",
    initialState,
    reducers: {},
    extraReducers: {}
});

export default alertSlice.reducer;