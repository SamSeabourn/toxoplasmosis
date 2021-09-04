import React from 'react';
import Button from '../Button/Index';
import Logo from '../Logo/Index';
import { ControlButton } from '../Types/ButtonFunction';
import styles from './Style.module.css';

const controls : Array<ControlButton> = [
  {
    name: 'Cat pics only',
    description: 'Swap all images to cats',
    buttonAction: () => { console.log('Cat pics only'); },
    uid: 'catpics001',
  },
  {
    name: 'Inspirational message',
    description: 'Get an inspirational message ',
    buttonAction: () => { console.log('Inspirational message'); },
    uid: 'insp001',
  },
  {
    name: 'Full send',
    description: 'For cat entusiasts only',
    buttonAction: () => { console.log('Inspirational message'); },
    uid: 'fullsend001',
  },
];

export const ControlPanel = () => (
  <div className={styles.wrapper}>
    <Logo />
    {
        controls.map((ctrl) => (
          <Button controlButton={ctrl} key={ctrl.uid} />
        ))
    }
  </div>
);

export default ControlPanel;
