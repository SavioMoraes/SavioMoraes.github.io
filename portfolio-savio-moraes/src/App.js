import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Perfil, Experiencias, NotFound } from './pages/';
import { Header, Footer, Apresentation } from './components';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Apresentation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={ <Perfil /> } />
        <Route exact path="/experiences" element={ <Experiencias /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
