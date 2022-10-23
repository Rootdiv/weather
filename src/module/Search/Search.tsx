import { FormEvent, ChangeEvent, useState } from 'react';
import style from './Search.module.scss';

import { ReactComponent as SearchIcon } from './search.svg';
import { weatherRequestAsync } from 'store/weatherAction';
import { useAppDispatch } from 'hooks';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handlerSubmit = (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    dispatch(weatherRequestAsync(search));
  };

  const handlerChange = (event: ChangeEvent<EventTarget>) => {
    if (event.target instanceof HTMLInputElement) {
      setSearch(event.target.value);
    }
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input type="search" className={style.search} value={search} onChange={handlerChange} />
      <button type="submit" className={style.btn}>
        <SearchIcon />
      </button>
    </form>
  );
};
