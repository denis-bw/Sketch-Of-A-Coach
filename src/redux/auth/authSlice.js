import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorizationUser, fetchLogUser, fetchLogout, refreshUser } from './authOperations.js';

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
      // console.log(action)
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(fetchAuthorizationUser.rejected, (state, action) => {
      // const { message } = action.payload;
      console.log('action', action)
      state.error = action.payload
      state.isLoading = false;

    })
    .addCase(fetchLogUser.pending, (state) => {
      state.error = null;
    })
    .addCase(fetchLogUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(fetchLogUser.rejected, (state, action) => {
      const { status, message } = action.error;
      console.log(action)
      if (status === 401) {
        state.error = 'Невірний логін або пароль.';
      } else {
        state.error = message || 'Сталася непередбачена помилка.';
      }
    })
    .addCase(fetchLogout.pending, (state) => {
      state.error = null;
    })
    .addCase(fetchLogout.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(fetchLogout.rejected, (state, action) => {
      state.error = action.error.message || 'Сталася непередбачена помилка при виході.';
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