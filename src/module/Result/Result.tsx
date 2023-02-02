import style from './Result.module.sass';
import { useAppSelector } from 'hooks';

export const Result = () => {
  const { isLoading, weather, error } = useAppSelector(state => state.weather);
  return (
    <div className={style.result}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : 'name' in weather ? (
        <>
          <p>{weather.main.temp}&#8451;</p>
          <p>{weather.name}</p>
        </>
      ) : error === 'Not Found' ? (
        <p>Город не найден</p>
      ) : (
        <p>Введите город</p>
      )}
    </div>
  );
};
