import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const Store=configureStore({
    reducer:{
        cart:cartSlice,
     },
});

export default Store;