import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import './mobile.css';


function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-menu" onClick = { () => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faWindowClose}/>
      </div>
      
      <div className="mobile-options">
        <div className="mobile-option">
          <NavLink to="/" activeClassName="selected">
            <FontAwesomeIcon icon={faHome} />Home</NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/profile"><FontAwesomeIcon icon={faMale} />Perfil</NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/experiencies"><FontAwesomeIcon icon={faBriefcase} />Experências</NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/projects"><FontAwesomeIcon icon={faLaptop} />Projetos</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Mobile;
