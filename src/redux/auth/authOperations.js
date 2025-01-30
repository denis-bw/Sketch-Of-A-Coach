import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = BASE_URL || "http://localhost:3000/api/auth/"

const token = {
    setToken(token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unsetToken() {
        axios.defaults.headers.Authorization = '';
    }
}

export const fetchAuthorizationUser = createAsyncThunk(
  'userDetails/fetchAuthorizationUser',
  async (dataUser, thunkApi) => {
      try {
        console.log(dataUser)
      const { data } = await axios.post('/users/register', dataUser);
      token.setToken(data.token); 
      return data;
    } catch (err) {
    console.log(thunkApi.rejectWithValue(err),"payload")
    
    if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
    }

    const status = err.response.status;
    if (status === 409) {
        return thunkApi.rejectWithValue('Користувач з таким email вже існує.');
    }
    if (status === 400) {
        return thunkApi.rejectWithValue('Некоректно заповнена форма.');
    }

      return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
    
    }
  }
);

export const fetchLogUser = createAsyncThunk('userDetails/fetchLogUser',
    async (dataUser, thunkApi) => {
        try {   
            const { data } = await axios.post('/users/login', dataUser);
            token.setToken(data.token);
            return data;
        } catch (err) { 
            return thunkApi.rejectWithValue(err.message);  // Виправлено помилку тут
        }
});

export const fetchLogout = createAsyncThunk('userDetails/fetchLogIn',
    async (_, thunkApi) => {
        try {   
            await axios.post('/users/logout');
            token.unsetToken();
        } catch (err) {  
            return thunkApi.rejectWithValue(err.message);  // Виправлено помилку тут
        }
    });

export const refreshUser = createAsyncThunk('userDetails/refreshUser',
    async (_, thunkApi) => {
        const { auth } = thunkApi.getState();  // Оновлено для узгодженості з назвою слайсу
        if (!auth.token) throw new Error('Cannot read properties of undefined reading token');
        token.setToken(auth.token);

        try {
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            console.log(error, 'err');
            return thunkApi.rejectWithValue(error.message);  // Виправлено помилку тут
        }
    });