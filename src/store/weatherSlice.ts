import { createSlice } from '@reduxjs/toolkit';
import { weatherRequestAsync } from './weatherAction';
import { IWeather } from './weatherTypes';

const initialState: IWeather = {
  isLoading: false,
  error: '',
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(weatherRequestAsync.pending, state => {
        state.isLoading = true;
        state.error = '';
        state.weather = {};
      })
      .addCase(weatherRequestAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error ?? '';
        state.weather = action.payload;
      })
      .addCase(weatherRequestAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
        state.weather = {};
      });
  },
});

export default weatherSlice.reducer;
