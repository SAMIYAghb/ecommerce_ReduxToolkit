
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from './../utils/apiURL';




export const fetchAsyncCategories = createAsyncThunk('category/fetchAsyncCategories',
async(_, thunkAPI)=>{
   try{
    const res = await fetch(`${BASE_URL}products/categories`);
    const data = res.json();
    // console.log(data);
    return data;
  

   }catch(error){
    // console.log(error);
   }
});

export const fetchAsyncProductsOfCategory = createAsyncThunk('category-products/fetch', async(category) => {
    const response = await fetch(`${BASE_URL}products/category/${category}`);
    const data = await response.json();
    return data.products;
});



const categorySlice = createSlice({
    name: 'category',
    initialState:{ categories: [], 
                    categoryProducts: [],
                   laoding : false, 
                   error:null},
    reducers: { },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAsyncCategories.pending, (state, action) => {
            state.laoding = true;
            state.error = null;
           
        })
        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.laoding = false;
            state.categories = action.payload;
        }) 
        .addCase(fetchAsyncCategories.rejected, (state, action) => {
             state.laoding = false;
            state.error = action.payload;
        })
        .addCase(fetchAsyncProductsOfCategory.pending, (state, action) => {
            state.laoding = true;
           state.error = null;
       })
       .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
            state.laoding = false;
            state.categoryProducts = action.payload;
        })
        .addCase(fetchAsyncProductsOfCategory.rejected, (state, action) => {
            state.laoding = false;
           state.error = action.payload;
       })

    }
});


export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) => state.category.categoryProducts;
export const getCategoryProductsStatus = (state) => state.category.categoryProductsStatus;

export default categorySlice.reducer;