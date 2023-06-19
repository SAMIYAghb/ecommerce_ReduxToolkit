
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './../utils/apiURL'; 
import { STATUS } from './../utils/status';

const initialState = {
    products : [],
    productsStatus : STATUS.IDLE,
    productSingle:[],
    productSingleStatus: STATUS.IDLE,
}

//get the products list whith limit number of products
export const fetchAsyncPrducts = createAsyncThunk('products/fetchAllPrducts', async(limit)=>{
    try{
        const response = await fetch(`${BASE_URL}products?limit=${limit}`)
        const data = await response.json();
        // console.log(data);
        return data.products;
   
    }catch(error){
        // console.log(error);
    }
   
})

//get the single product data
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetchAsyncProductSingle', 
async(id)=>{
    try{
        const response = await fetch(`${BASE_URL}products/${id}`)
        const data = await response.json();
        return data;

    }catch(error){
        // console.log(error);
    }
})





export const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        //for all Products
        .addCase(fetchAsyncPrducts.pending, (state, action) => {
            state.productsStatus =STATUS.LOADING;  
           
        })
        .addCase(fetchAsyncPrducts.fulfilled, (state, action) => {
            // console.log(action);
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCEEDED;   
            
        })
        .addCase(fetchAsyncPrducts.rejected, (state, action) => {
            state.productsStatus =STATUS.FAILED;  
           
        })



        //For single product
        .addCase(fetchAsyncProductSingle.pending, (state, action) => {
            state.productSingleStatus =STATUS.LOADING; 
        })
        .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {     
            state.productSingle = action.payload;
            state.productSingleStatus =STATUS.SUCCEEDED; 
        })
        .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
            state.productSingleStatus =STATUS.FAILED; 
        })



    },
})

//for all Products
export const getAllProducts  = (state)=> state.product.products
export const getAllProductsStatus  = (state)=> state.product.productsStatus

// For Single product
export const getSingleProduct = (state)=>state.product.productSingle
export const getSingleProductStatus = (state)=>state.product.productSingleStatus

export default ProductSlice.reducer
