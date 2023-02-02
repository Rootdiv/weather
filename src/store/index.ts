import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';

const rootReducer = combineReducers({
  weather: weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
//Получаем тип store
export type AppStore = typeof store;
//Получаем тип dispatch
export type AppDispatch = AppStore['dispatch'];
//Получаем тип стейта
export type RootState = ReturnType<typeof rootReducer>;
