import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        addProduct(state,action){

        }
    }
})
// console.log("slicee",productSlice.actions)
export default productSlice.reducer