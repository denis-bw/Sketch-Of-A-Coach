import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = true;
    },
    startRefreshing(state) {
      state.isRefreshing = true;
    },
    stopRefreshing(state) {
      state.isRefreshing = true;
    },
  },
});

export const { logIn, logOut, startRefreshing, stopRefreshing } = authSlice.actions;
export const authReducer = authSlice.reducer;
