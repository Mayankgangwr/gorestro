import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    name: string;
    email: string;
}

interface AuthState {
    status: boolean;
    userData: UserData | null;
    role: string;
}

const initialState: AuthState = {
    status: false,
    userData: null,
    role: "guest",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ userdata: UserData; role: string }>) => {
            state.status = true;
            state.userData = action.payload.userdata;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.role = "guest";
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
