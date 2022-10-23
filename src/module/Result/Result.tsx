import style from './Result.module.scss';
import { useAppSelector } from 'hooks';

export const Result = () => {
  const { isLoading, weather, error } = useAppSelector(state => state.weather);
  return (
    <div className={style.result}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : weather.name ? (
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
