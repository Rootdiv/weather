import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from './store';

//Создаём типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
//Создаём типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
