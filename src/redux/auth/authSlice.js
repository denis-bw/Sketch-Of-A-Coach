import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorizationUser,fetchLoginUser, fetchLogout, refreshUser } from './authOperations.js';

const initialState = {
  user: { email: null, username: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchAuthorizationUser.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchAuthorizationUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(fetchAuthorizationUser.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false;

    })
    .addCase(fetchLoginUser.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(fetchLoginUser.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false;
    })
    .addCase(fetchLogout.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchLogout.fulfilled, (state) => {
      state.user = { email: null, username: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    })
    .addCase(fetchLogout.rejected, (state, action) => {
      console.log(action)
      state.error = action.payload || 'Сталася непередбачена помилка при виході.';
      state.isLoading = false;
    })
    .addCase(refreshUser.pending, (state) => {
      state.error = null;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    })
    .addCase(refreshUser.rejected, (state, action) => {
      state.error = action.error.message || 'Не вдалося оновити дані користувача.';
    }),
});

export const authReducer = authSlice.reducer;