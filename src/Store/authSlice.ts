import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    id: string | null;
    name: string | null;
    email: string | null;
    avatar: string | null;
    role: string | null;
}

interface AuthState {
    status: boolean;
    userData: UserData | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    status: false,
    userData: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ userdata: UserData; accessToken: string }>) => {
            state.status = true;
            state.userData = action.payload.userdata;
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.accessToken = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
