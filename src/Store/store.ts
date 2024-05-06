import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import systemSlice from "./systemSlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        system: systemSlice,
    },
    devTools: true,
});
export default store;