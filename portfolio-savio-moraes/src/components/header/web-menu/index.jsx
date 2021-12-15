import React from 'react';
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
          <a href="../../../pages/home"><FontAwesomeIcon icon={faHome} size="lg" className="web-icons" />Home</a>
        </div>
      <div className="web-options">
        <a href='../../../perfil'><FontAwesomeIcon icon={faMale} size="lg" className="web-icons" />Perfil</a>
      </div>
      <div className="web-options">
        <a href="../../../pages/experiencias"><FontAwesomeIcon icon={faBriefcase} size="lg" className="web-icons"/>Experências</a>
      </div>
      <div className="web-options">
        <a href="../../../pages/projects"><FontAwesomeIcon icon={faLaptop} size="lg" className="web-icons"/>Projetos</a>
      </div>
    </div>
  )
}

export default Web
