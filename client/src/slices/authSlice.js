import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alert } from './alertSlice';
import setHeader from '../utils/setHeader';
import axios from 'axios';

let initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    user: null
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const loadUser = createAsyncThunk(
    'loadUser/auth',
    async (dummy, { dispatch }) => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            setHeader(token);

            const response = await axios.get('/api/users/currentUser');
            const { data } = response;
            return data;
        } catch (err) {
            dispatch(alert({ type: 'red', msg: err.response.data.errors[0].msg }));
        }
    }
);

export const loginAction = createAsyncThunk(
    'login/auth',
    async ({ email, password }, { dispatch }) => {
        try {
            const body = JSON.stringify({ email, password });
            const response = await axios.post('/api/users/login', body, config);

            const { data } = response;
            localStorage.setItem('token', data.token);
            dispatch(alert({ type: 'green', msg: 'Logged in successfully' }));
            dispatch(loadUser('dummy'));

        } catch (err) {
            dispatch(alert({ type: 'red', msg: err.response.data.errors[0].msg }));
        }
    }
)
export const registerAction = createAsyncThunk(
    'register/auth',
    async ({ name, email, phone, password }, { dispatch }) => {
        try {
            const body = JSON.stringify({ name, email, phone, password });

            const response = await axios.post('/api/users/signup', body, config);
            const { data } = response;

            localStorage.setItem('token', data.token);
            dispatch(alert({ type: 'green', msg: 'Logged in successfully' }));
            dispatch(loadUser('dummy'));
            return;
        } catch (err) {
            dispatch(alert({ type: 'red', msg: err.response.data.errors[0].msg }));
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutAction: (state) => {
            setHeader();
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.loading = false;
            state.token = null;
            state.user = null;
        }
    },
    extraReducers: {
        [loadUser.pending]: (state) => {
            state.loading = true;
        },
        [loadUser.fulfilled]: (state, { payload }) => {
            // console.log(payload);
            state.token = localStorage.getItem('token');
            state.isAuthenticated = true;
            state.loading = false;
            state.user = payload
        },
        [loadUser.rejected]: (state, action) => {
            console.log(action);
        }

    }
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;