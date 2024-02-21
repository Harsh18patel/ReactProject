import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { BE_URL } from '../../../../config'

export const fetctWishlistData = createAsyncThunk ("wishlist",async() => {
 return await axios({
        method:"get",
        url:`${BE_URL}`,
     })

     .then((res)=>{
        return res?.data;
     })
     .then((err)=>{
        console.log("err wishlist", err.message);
     });
});

const wishListSlice = createSlice({
    name:"wishListSlice",
    initialState:{
        data:[],
        pending:"false",
        error:"",
    },
    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(fetctWishlistData.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.pending = false;
            state.error = "";
        })

        .addCase(fetctWishlistData,pending, (state,action)=>{
            state.pending = true;
            state.error = "";
        })

        .addCase(fetctWishlistData.rejected, (state,action)=>{
            state.pending = false;
            state.error = action.error.message;
        });
    },
});

export default wishListSlice.reducer;
