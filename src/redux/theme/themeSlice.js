// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('theme');

const themeSlice = createSlice({
  name: 'theme',
  initialState: savedTheme || 'light',
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    },
    setLightTheme: () => {
      localStorage.setItem('theme', 'light');
      return 'light';
    },
  },
});

export const { toggleTheme, setLightTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export const themeReducer = themeSlice.reducer;