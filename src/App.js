import React from 'react';
import './App.css';
import UserLayout from './components/layout/UserLayout';
import { SettingsConsumer, SettingsProvider } from './@core/context/settingsContext';
import ThemeComponent from './@core/theme/ThemeComponent';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{<UserLayout sx={{ with: "100%" }} />}</ThemeComponent>
          }}
          
        </SettingsConsumer>
      </SettingsProvider>
    </div>
  );
}

export default App;
