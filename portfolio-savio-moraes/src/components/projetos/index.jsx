import React from 'react';
import './projetos.css';
import shoppingCart from './images/imagem-project-shopping-cart.png';
import pixelsArt from './images/imagem-projeto-pixels-art.png';
import toDoList from './images/imagem-projeto-to-do-list.png';
import movieCards from './images/imagem-project-movie-cards.png';
import movieCardsLibrary from './images/imagem-project-movie-cards-library.png';


function Projetos() {
  return (
    <div>
      <h3>Alguns projetos que desenvolvi </h3>
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
          <img src={movieCards} alt="project movieCards" />
        </div>
        <div className="project">
          <img src={movieCardsLibrary} alt="project toDoList" />
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Projetos;
