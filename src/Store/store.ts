import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import teamSlice from "./Slices/teamSlice";
import systemSlice from "./systemSlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        team: teamSlice,
        system: systemSlice,
    },
    devTools: true,
});

export default store;