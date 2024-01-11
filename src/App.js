// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import ActionList from './components/ActionList';
import './App.css';

const App = () => {
  // Sample data for ActionList
  const actions = ["Action 1", "Action 2", "Action 3"];

  return (
    <div className="app">
      <h1>React Calculator App</h1>
      <Calculator />
      <ActionList actions={actions} />
    </div>
  );
};

export default App;
