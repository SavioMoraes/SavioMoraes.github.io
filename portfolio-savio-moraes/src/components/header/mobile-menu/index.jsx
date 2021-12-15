import React from 'react';
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
          <a href="../../../pages/home"><FontAwesomeIcon icon={faHome} />Home</a>
        </div>
        <div className="mobile-option">
          <a href="../../../perfil"><FontAwesomeIcon icon={faMale} />Perfil</a>
        </div>
        <div className="mobile-option">
          <a href="../../../pages/experiencias"><FontAwesomeIcon icon={faBriefcase} />Experências</a>
        </div>
        <div className="mobile-option">
          <a href="../../../pages/projects"><FontAwesomeIcon icon={faLaptop} />Projetos</a>
        </div>
      </div>
    </div>
  )
}

export default Mobile;
