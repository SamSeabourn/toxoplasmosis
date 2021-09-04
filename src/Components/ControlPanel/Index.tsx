import React from 'react';
import Button from '../Button/Index';
import Logo from '../Logo/Index';
import { Controls } from './Controls';
import styles from './Style.module.css';

export const ControlPanel = () => (

  <div className={styles.wrapper}>
    <Logo />
    {
        Controls.map((ctrl) => (
          <Button controlButton={ctrl} key={ctrl.uid} />
        ))
    }
  </div>
);

export default ControlPanel;
