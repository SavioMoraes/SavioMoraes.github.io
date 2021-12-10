import React from 'react';
import Home from './components/home';
import Perfil from './components/perfil';
import Experiencias from './components/experiencias'

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Perfil />
      <Experiencias />
    </div>
  );
}

export default App;
