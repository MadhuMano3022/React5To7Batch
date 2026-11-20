import { createSlice } from "@reduxjs/toolkit";

let initialState=[]
const CustomerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload)
        },
        removeCustomer(state,action){
            let customerIndex = action.payload
            return state.filter((val,index) => index!==customerIndex)
        }
    }
})
 
export const {addCustomer,removeCustomer} = CustomerSlice.actions
export default CustomerSlice.reducer