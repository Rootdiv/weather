import { ReactNode } from 'react';
import style from './Container.module.sass';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => <div className={style.container}>{children}</div>;
