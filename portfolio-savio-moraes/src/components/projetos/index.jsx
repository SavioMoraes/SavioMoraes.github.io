import React from 'react';
import './projetos.css';
import shoppingCart from './images/shopping-cart.png';
import pixelsArt from './images/imagem-projeto-pixels-art.png';
import toDoList from './images/imagem-projeto-to-do-list.png';
import movieCardsLibrary from './images/movie-cards-library.png';


function Projetos() {
  return (
    <div>
      <h3 className="projects-title">PROJETOS</h3>
      <div className="projects">
        <div className="project">
          <img src={shoppingCart} alt="project shopping-cart" />
        </div>
        <div className="project">
        <img src={pixelsArt} alt="project pixelsArt" />
        </div>
        <div className="project">
          <img src={toDoList} alt="project toDoList" />
        </div>
        <div className="project">
          <img src={movieCardsLibrary} alt="project movieCardsLibrary" />
        </div>
      </div>
      <h3 className="projects-text">
        clique aqui e veja outros projetos que desenvolvi
      </h3>
      <hr/>
    </div>
  )
}

export default Projetos;
