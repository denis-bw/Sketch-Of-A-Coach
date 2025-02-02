import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = BASE_URL

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
      const { data } = await axios.post('/users/register', dataUser);
      token.setToken(data.token); 
      return data;
    } catch (err) {
    
    if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
    }

    const status = err.response.status;
    if (status === 409) {
        return thunkApi.rejectWithValue('Користувач з таким email вже існує.');
    }
    if (status === 400) {
        return thunkApi.rejectWithValue('Некоректно введені дані.');
    }
      return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
    }
  }
);

export const fetchLoginUser = createAsyncThunk(
  'userDetails/fetchLoginUser',
  async (dataUser, thunkApi) => {
    try {   
      const { data } = await axios.post('/users/login', dataUser);
      token.setToken(data.token);
      return data;
    } catch (err) { 

      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
     
      const status = err.response.status;
      switch (status) {
        case ( 400 || 401):
          return thunkApi.rejectWithValue('Невірний email або пароль. Перевірте дані та спробуйте ще раз.');
        case 403:
          return thunkApi.rejectWithValue('Доступ заборонено. Можливо, ваш акаунт заблоковано.');
        case 500:
          return thunkApi.rejectWithValue('Помилка сервера. Будь ласка, спробуйте пізніше.');
        case 429:
          return thunkApi.rejectWithValue(err.response.data.message);
        default:
          return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
      }
    }
  }
);

export const fetchLogout = createAsyncThunk('userDetails/fetchLogIn',
    async (_, thunkApi) => {
        try {   
            await axios.post('/users/logout');
            token.unsetToken();
        } catch (err) {  
                if (err.response) {
                    if (err.response.status === 401) {
                    token.unsetToken();
                    return thunkApi.rejectWithValue('Ви вже вийшли з акаунту.'); 
                }
                if (err.response.status === 404) {
                    return thunkApi.rejectWithValue('Сервер не знайдено.');  
                }
            }
 
            return thunkApi.rejectWithValue('Помилка при виході з акаунту. Спробуйте ще раз.');
        }
});

export const refreshUser = createAsyncThunk(
  'userDetails/refreshUser',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState(); 
    
    if (!auth.token) {
      return thunkApi.rejectWithValue('No token found');
    }

    try {
      token.setToken(auth.token);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return thunkApi.rejectWithValue('Час сеансу закінчився. Будь ласка, увійдіть ще раз.');
      }
      return thunkApi.rejectWithValue(error.message);  
    }
  }
);