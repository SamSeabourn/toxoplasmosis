import React, { useState } from 'react';
import { ControlButton } from '../Types/ControlButton';
import style from './Style.module.css';

interface IProps {
  controlButton: ControlButton;
}

export const Button = ({ controlButton }: IProps) => {
  const { uid, name } = controlButton;
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleClick = () => {
    if (isPressed) return;
    setIsPressed(true);
    controlButton.buttonAction();
  };

  const getActiveClass = () => (isPressed ? style.pressed : style.notPressed);

  return (
    <button
      aria-label={name}
      id={uid}
      className={`${style.button} ${getActiveClass()}`}
      onClick={handleClick}
      type="button"
    >
      {name}
    </button>
  );
};

export default Button;
