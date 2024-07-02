import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
    reducer: {
        playlist: cartSlice,
        modal: modalSlice,
    }
})

export default store;