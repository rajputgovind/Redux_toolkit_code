import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"count",
    initialState : 0,
    reducers:{
        increament(state,action){
            console.log("increament state",state)
            return state = state+1
        },
        decreament(state,action){
            console.log("decreament state",state)
            return state = state-1
        },
        increamentBY25(state,action){
            console.log("increamentBY25 state",state)
            return state = state+action.payload
        }
    }
})

export default countSlice.reducer
export const {increament,decreament,increamentBY25} = countSlice.actions