import React from 'react';
import ControlPanel from './Components/ControlPanel/Index';
import PopupContainer from './Components/PopupContainer/Index';
import './globals.module.css';

const App = () => (
  <div className="App">
    <PopupContainer>
      <ControlPanel />
    </PopupContainer>
  </div>
);

export default App;
