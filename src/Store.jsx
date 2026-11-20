import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./Slice/CustomerSlice"

const CustomerStore = configureStore({
    reducer:{
        customer:CustomerReducer
    }
})

export default CustomerStore