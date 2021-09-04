import React from 'react';
import style from './Style.module.css';

interface IProps {
    children: React.ReactNode
}

export const PopupContainer = ({ children }: IProps) => (
  <div className={style.wrapper}>
    { children }
  </div>
);

export default PopupContainer;
