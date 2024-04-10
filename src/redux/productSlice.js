import getProducts from "../utils/api-client"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getProductThunk = createAsyncThunk("/getProduct", async ()=>{
    return  await getProducts();
 
})
const productSlice = createSlice({
    name : "productSlice",
    initialState : { 
        product : [],
        loading : false,
        error : null
    },

    reducers : {

    },

    extraReducers : (builder)=>{
        builder
        .addCase(getProductThunk.pending , (state,action)=>{
            state.loading = true;
        })
        .addCase(getProductThunk.fulfilled , (state,action)=>{
            state.product = action.payload;
            state.loading = false;
        })
        .addCase(getProductThunk.rejected , (state,action)=>{
            loading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;