import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import teamSlice from "./Slices/teamSlice";
import systemSlice from "./systemSlice";
import productSlice from "./Slices/productSlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        team: teamSlice,
        system: systemSlice,
        product: productSlice
    },
    devTools: true,
});

export default store;