import React from 'react';
import './App.css';
import UserLayout from './components/layout/UserLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserLayout/>
    </div>
  );
}

export default App;
