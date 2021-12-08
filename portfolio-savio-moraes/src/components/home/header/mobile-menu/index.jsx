import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import './mobile.css';


function Mobile() {
  return (
    <div className="mobile">
      <div className="mobile-options">
        <a href="#Perfil"><FontAwesomeIcon icon={faMale} size="lg"/>Perfil</a>
      </div>
      <div className="mobile-options">
        <a href="#Trabalhos"><FontAwesomeIcon icon={faBriefcase} size="lg"/>Experências</a>
      </div>
      <div className="mobile-options">
        <a href="#Contatos"><FontAwesomeIcon icon={faIdCard} size="lg"/>Contatos</a>
      </div>
      <div className="mobile-options">
        <a href="#Projetos"><FontAwesomeIcon icon={faLaptop} size="lg"/>Projetos</a>
      </div>
    </div>
  )
}

export default Mobile;
