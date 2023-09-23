import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import ProductSlice from "./slices/ProductSlice";
import countSlice from "./slices/countSlice";

const store = configureStore({
    reducer:{
        users : userSlice,
       products:ProductSlice,
       counts : countSlice
    }
})

export default store