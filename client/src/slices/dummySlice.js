import { createSlice } from "@reduxjs/toolkit";
let initialState = [];

const dummySlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert: (state, { payload }) => {
            state.push(payload);
        },
        removeAlert: (state) => {
            state.pop();
        }
    }
});

export const { setAlert, removeAlert } = dummySlice.actions;
export default dummySlice.reducer;