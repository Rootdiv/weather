import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWeather } from './weatherTypes';

const API_KEY = process.env.REACT_APP_API_KEY;
//createAsyncThunk<IWeather, string> - типизация ответа и аргумента функции.
export const weatherRequestAsync = createAsyncThunk<IWeather, string>('weather/fetch', async city => {
  const response: Response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`,
  );
  if (response.ok && response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
});
