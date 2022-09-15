/* eslint-disable prettier/prettier */
//Reducer

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: 'admin',
        password: 'Admin@123',
        isLoggedIn: false,
    },
    reducers: {
        checkAuth: (state, action) => {
            console.log('Action', action);
            if (state.username === action.payload.username && state.password === action.payload.password) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
        },
        logout: state => {
            state.isLoggedIn = false;
        }
    }
});

export const { checkAuth, logout } = loginSlice.actions;

export default loginSlice.reducer;