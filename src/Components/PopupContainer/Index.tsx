import React from 'react';

interface IProps {
    children: React.ReactNode
}

export const PopupContainer = ({ children }: IProps) => (
  <div>
    { children }
  </div>
);

export default PopupContainer;
