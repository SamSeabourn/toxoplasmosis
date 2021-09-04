import React, { useState } from 'react';
import { ControlButton } from '../Types/ButtonFunction';
import style from './Style.module.css';

interface IProps {
    controlButton: ControlButton
}

export const Button = ({ controlButton }: IProps) => {
  const { uid, name } = controlButton;
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleClick = () => {
    setIsActive(!isActive);
    controlButton.buttonAction();
  };

  const getActiveClass = () => (isActive ? style.on : style.off);

  return (
    <>
      <button aria-label={name} id={uid} className={`${style.button} ${getActiveClass()}`} onClick={handleClick} type="button">
        {name}
      </button>
    </>

  );
};

export default Button;
