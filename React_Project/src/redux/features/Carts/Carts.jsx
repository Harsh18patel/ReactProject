import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { BE_URL } from '../../../../config'

export const fetchCartData = createAsyncThunk("cartdata", async() =>{
    return await axios({
        method:"get",
        url:`${BE_URL}/cart/getAll`,
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
    })

    .then((res)=>{
        return res?.data?.data;
    })

    .catch((error)=>{
        console.log("cartdata error", error.message);
    });
});


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        data:[],
        pending:"false",
        error:"false",
    },
    reducers: {},

    extraReducers: (builder) =>{
        builder
        .addCase(fetchCartData.fulfilled, (state, action) =>{
            state.data = action.payload;
            state.pending = false;
            state.error = false;
        })
        .addCase(fetchCartData.pending, (state,action) =>{
            state.pending = true;
            state.error = false;
        })

        .addCase(fetchCartData.rejected, (state, action)=>{
            state.pending = false;
            state.error = action.error.message;
        });
    },
});

export default cartSlice.reducer;
