import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import './web.css';

function Web() {
  return (
    <div className="web">
      <div className="web-options">
        <a href="#profile"><FontAwesomeIcon icon={faMale} size="lg" className="web-icons" />Perfil</a>
      </div>
      <div className="web-options">
        <a href="#works"><FontAwesomeIcon icon={faBriefcase} size="lg" className="web-icons"/>Experências</a>
      </div>
      <div className="web-options">
        <a href="#contacts"><FontAwesomeIcon icon={faIdCard} size="lg" className="web-icons"/>Contatos</a>
      </div>
      <div className="web-options">
        <a href="#projects"><FontAwesomeIcon icon={faLaptop} size="lg" className="web-icons"/>Projetos</a>
      </div>
    </div>
  )
}

export default Web
