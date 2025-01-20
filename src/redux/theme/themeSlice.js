import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
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