import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload) 
        },
        removeUser(state,action){
        //    state.pop(action.payload) it is delete last element when i am click where ever
        // const userIndex = state.indexOf(action.payload)
        // console.log("userIndex",userIndex)
        // state.splice(userIndex,1)
        state.splice(action.payload,1)
        },
        // deleteUsers(state,action){
        //     console.log("delete all user ")
        //    return []
        // }
    },
    extraReducers:(builder)=>{
        // builder.addCase(userSlice.actions.deleteUsers,()=>{
        //     console.log("extrareducer is call",builder)
        //     return []
        // }),
        builder.addCase(deleteUsers,()=>{
            console.log("extrareducer is call",builder)
            return []
        })
    }
}) 
console.log("slicee",userSlice.actions)
export default userSlice.reducer
// export const { addUser , removeUser, deleteUsers} =  userSlice.actions
export const { addUser , removeUser} =  userSlice.actions
