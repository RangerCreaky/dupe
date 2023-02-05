import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    products: null,
    product: null,
    error: null,
    loading: false
}

export const getAllProducts = createAsyncThunk(
    'getProducts/shop',
    async ({ page, limit }, { dispatch }) => {
        try {
            console.log('in get all products');
            const response = await axios.get(`/api/products?page=${page}&limit=${limit}`);
            const { data } = response;

            return data;
        } catch (err) {
            dispatch(alert({ type: 'red', msg: err.response.data.errors[0].msg }));
        }
    }
);

export const getSingleProduct = createAsyncThunk(
    'getProduct/shop',
    async (id, { dispatch }) => {
        try {
            const response = await axios.get(`/api/products/${id}`);
            const { data } = response;

            console.log(data);
            return data;
        } catch (err) {
            dispatch(alert({ type: 'red', msg: err.response.data.errors[0].msg }));
        }
    }
)

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.products = payload;
            state.loading = false;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        [getSingleProduct.pending]: (state) => {
            state.loading = true;
        },
        [getSingleProduct.fulfilled]: (state, { payload }) => {
            state.product = payload;
            state.loading = false;
        },
        [getSingleProduct.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
    }
});



// export const {} = shopSlice.actions;
export default shopSlice.reducer;