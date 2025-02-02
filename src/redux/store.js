import { configureStore , combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice.js';


import { createTransform } from 'redux-persist';

const authTransform = createTransform(
  (inboundState) => {
    const { isLoading,isLoggedIn, error, ...persistedState } = inboundState;
    return persistedState;
  },
  (outboundState) => {
    return { ...outboundState, isLoading: false, isLoggedIn: false ,error: null };
  },
  { whitelist: ['auth'] }
);

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});


const persistConfig = {
  key: 'root',
  storage,
  transforms: [authTransform],
};



export const store = configureStore({
    reducer:  persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
            ]
        },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
