import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import './web.css';

function Web() {
  return (
    <div className="web">
      <div className="web-options">
        <NavLink to="/" activeClassName="selected">
          <FontAwesomeIcon icon={faHome} />Home</NavLink>
      </div>
      <div className="web-options">
        <NavLink to="/profile"><FontAwesomeIcon icon={faMale} />Perfil</NavLink>
      </div>
      <div className="web-options">
        <NavLink to="/experiencies"><FontAwesomeIcon icon={faBriefcase} />Experências</NavLink>
      </div>
      <div className="web-options">
        <NavLink to="/projects"><FontAwesomeIcon icon={faLaptop} />Projetos</NavLink>
      </div>
    </div>
  )
}

export default Web
