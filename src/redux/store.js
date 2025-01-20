import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice.js';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});