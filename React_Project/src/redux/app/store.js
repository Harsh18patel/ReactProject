import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/Auth";
import productReducer from "../features/Product/Product"


export const store = configureStore({
    reducer: {authReducer, productReducer },
});