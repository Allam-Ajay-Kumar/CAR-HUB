import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./ProductSlice"
export const store = configureStore({
    reducer:{
        products:Productslice,
    }
})