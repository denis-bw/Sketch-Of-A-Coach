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

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
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